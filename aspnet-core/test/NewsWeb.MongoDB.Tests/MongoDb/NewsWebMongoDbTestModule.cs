using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace NewsWeb.MongoDB
{
    [DependsOn(
        typeof(NewsWebTestBaseModule),
        typeof(NewsWebMongoDbModule)
        )]
    public class NewsWebMongoDbTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var stringArray = NewsWebMongoDbFixture.ConnectionString.Split('?');
                        var connectionString = stringArray[0].EnsureEndsWith('/')  +
                                                   "Db_" +
                                               Guid.NewGuid().ToString("N") + "/?" + stringArray[1];

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });
        }
    }
}
