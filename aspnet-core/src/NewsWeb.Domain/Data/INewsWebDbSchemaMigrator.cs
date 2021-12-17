using System.Threading.Tasks;

namespace NewsWeb.Data
{
    public interface INewsWebDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
