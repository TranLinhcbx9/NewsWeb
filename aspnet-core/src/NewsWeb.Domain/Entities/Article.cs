using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;
using static NewsWeb.Enums.Enum;

namespace NewsWeb.Entities
{
    public class Article : FullAuditedAggregateRoot<Guid>
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public string IconImagePath { get; set; }
        public long ViewCount { get; set; }
        public int Rate { get; set; }
        //public DateTime? CreationTime { get; set; }
        //public DateTime? LastmodificationTime { get; set; }
        public TopicCodeEnum? Topic { get; set; }
    }
    //public class Topic : BasicAggregateRoot<Guid>
    //{
    //    public string Name { get; set; }
    //    public CodeEnum Code { get; set; }
    //}
    
}


