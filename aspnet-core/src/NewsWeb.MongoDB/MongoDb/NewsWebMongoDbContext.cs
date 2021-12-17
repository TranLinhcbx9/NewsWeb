using MongoDB.Driver;
using NewsWeb.Entities;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace NewsWeb.MongoDB
{
    [ConnectionStringName("Default")]
    public class NewsWebMongoDbContext : AbpMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */
        public IMongoCollection<Article> Articles => Collection<Article>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            //builder.Entity<YourEntity>(b =>
            //{
            //    //...
            //});
            modelBuilder.Entity<Article>(b =>
            {
                b.CollectionName = "Articles";
            });
        }
    }
}
