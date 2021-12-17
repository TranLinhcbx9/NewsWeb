using NewsWeb.MongoDB;
using Xunit;

namespace NewsWeb
{
    [CollectionDefinition(NewsWebTestConsts.CollectionDefinitionName)]
    public class NewsWebApplicationCollection : NewsWebMongoDbCollectionFixtureBase
    {

    }
}
