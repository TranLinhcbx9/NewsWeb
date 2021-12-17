using NewsWeb.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace NewsWeb.Permissions
{
    public class NewsWebPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(NewsWebPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(NewsWebPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<NewsWebResource>(name);
        }
    }
}
