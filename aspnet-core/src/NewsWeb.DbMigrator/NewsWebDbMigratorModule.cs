using NewsWeb.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace NewsWeb.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(NewsWebMongoDbModule),
        typeof(NewsWebApplicationContractsModule)
        )]
    public class NewsWebDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
