# Lessons learnt

1. Functional components vs Class components.
   -> I opted for functional components, as class components are now oriented to Error handling. It seems functional components will make my website future proof when suspense comes.
   I'll extend on this in the future.
2. `react-router-dom` uses `react-router` underneath, and it's oriented for web development.
3. Error: `A router may have only one child element`:
   This happened to me when I was using

```
<Router>
    <div>
        <Route path="/" component={Home}>
        <Route path="/bio" component={Bio}>
    </div>
</Router>
```

The issue is that path="/" takes everything. To fix it I started using switch plus the class exact, I removed `<Router>` and only left `<Route>` as it wasn't needed, and moved my routes to a variable for completion.

4. To use emojis you can copy and paste, but I defined my own component so we can also use alt text and make it ready for accessibility.
5. To start deploying to Azure check [here](https://github.com/Azure/actions-workflow-samples/blob/master/assets/create-secrets-for-GitHub-workflows.md)
   It should be a json, (so remember to remove the comma at the end), such as:

```
 {
    "clientId": "(GUID)",
    "clientSecret": "(GUID)",
    "subscriptionId": "(GUID)",
    "tenantId": "(GUID)"
}
```

6. The existing github action has a type where it says `docker run .t [imagename]` it should be `docker run -t [imagename] .`
