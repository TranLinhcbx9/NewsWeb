using NewsWeb.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace NewsWeb.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class NewsWebController : AbpControllerBase
    {
        protected NewsWebController()
        {
            LocalizationResource = typeof(NewsWebResource);
        }
    }
}