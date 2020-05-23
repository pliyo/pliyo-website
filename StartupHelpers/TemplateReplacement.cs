namespace Pliyo.StartupHelpers
{
    public class TemplateReplacement
    {
        private const string PLACE_HOLDER = "\"__ENV_DATA__\"";
        public string ReplaceContent(string existingContent, string newContent)
        {
            return existingContent.Replace($"{PLACE_HOLDER}", $"Object.freeze({newContent})");
        }
    }
}
