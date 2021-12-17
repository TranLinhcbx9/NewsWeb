using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace NewsWeb.Data
{
    /* This is used if database provider does't define
     * INewsWebDbSchemaMigrator implementation.
     */
    public class NullNewsWebDbSchemaMigrator : INewsWebDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}