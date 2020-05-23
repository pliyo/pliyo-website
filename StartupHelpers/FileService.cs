using System.IO;

namespace Pliyo.StartupHelpers
{
    public class FileService
    {
        public string ReadTextFromFile(string path)
        {
            return File.ReadAllText(path);
        }

        public void WriteTextToFile(string path, string content)
        {
            File.WriteAllText(path, content);
        }
    }
}
