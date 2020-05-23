using Newtonsoft.Json;

namespace Pliyo.Models
{
    public class ClientConfig
    {
        [JsonProperty("applicationInsightsInstrumentationKey")]
        public string ApplicationInsightsInstrumentationKey { get; set; }
    }
}
