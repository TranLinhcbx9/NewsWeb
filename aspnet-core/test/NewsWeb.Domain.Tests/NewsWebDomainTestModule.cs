using NewsWeb.MongoDB;
using Volo.Abp.Modularity;

namespace NewsWeb
{
    [DependsOn(
        typeof(NewsWebMongoDbTestModule)
        )]
    public class NewsWebDomainTestModule : AbpModule
    {

    }
}