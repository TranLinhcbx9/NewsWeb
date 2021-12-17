using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace NewsWeb
{
    [Dependency(ReplaceServices = true)]
    public class NewsWebBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "NewsWeb";
    }
}
