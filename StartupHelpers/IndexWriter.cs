using Newtonsoft.Json;
using Pliyo.Models;

namespace Pliyo.StartupHelpers
{
    public class IndexWriter
    {
        private const string ROOT_PATH = "ClientApp/build";
        public const string NEW_INDEX_NAME = "/index.modified.html";

        private FileService _fileService;
        private TemplateReplacement _templateReplacement;

        public IndexWriter(FileService fileService, TemplateReplacement templateReplacement)
        {
            _fileService = fileService;
            _templateReplacement = templateReplacement;
        }
        public void CreateNewIndex(string defaultPage, ClientConfig clientConfig)
        {
            var clientSideConfig = JsonConvert.SerializeObject(clientConfig);

            var defaultContent = _fileService.ReadTextFromFile($"{ROOT_PATH}{defaultPage}");

            var newContent = _templateReplacement.ReplaceContent(defaultContent, clientSideConfig);

            _fileService.WriteTextToFile($"{ROOT_PATH}{NEW_INDEX_NAME}", newContent);
        }
    }
}
