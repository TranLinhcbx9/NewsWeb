using Volo.Abp.Modularity;

namespace NewsWeb
{
    [DependsOn(
        typeof(NewsWebApplicationModule),
        typeof(NewsWebDomainTestModule)
        )]
    public class NewsWebApplicationTestModule : AbpModule
    {

    }
}