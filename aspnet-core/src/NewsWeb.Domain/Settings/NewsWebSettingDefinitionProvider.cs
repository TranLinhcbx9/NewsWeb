using Volo.Abp.Settings;

namespace NewsWeb.Settings
{
    public class NewsWebSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(NewsWebSettings.MySetting1));
        }
    }
}
