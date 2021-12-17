using System;
using System.Collections.Generic;
using System.Text;
using NewsWeb.Localization;
using Volo.Abp.Application.Services;

namespace NewsWeb
{
    /* Inherit your application services from this class.
     */
    public abstract class NewsWebAppService : ApplicationService
    {
        protected NewsWebAppService()
        {
            LocalizationResource = typeof(NewsWebResource);
        }
    }
}
