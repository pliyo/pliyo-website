FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
WORKDIR /app

# Install node for building SPA, not required for production.
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install --assume-yes nodejs

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .

# Expose 8080 as we are going to be a non-root user
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080

# Adds pliyo group and user.
# useradd -r will add a system account
# A system account is an account that a program/deamon starts and/or uses to run
RUN groupadd -g 1100 pliyo && \
    useradd -r -u 1100 -g pliyo pliyo
# chown -R recursively changes the owner of all files and directories under /app
RUN chown -R pliyo:pliyo /app

ENTRYPOINT ["dotnet", "Pliyo.dll"]
## USAGE
## Remember to do docker build -t [name] .
## Then docker run -p 3000:8080 -ti [name]