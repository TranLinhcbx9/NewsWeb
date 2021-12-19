using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static NewsWeb.Enums.Enum;

namespace NewsWeb.APIs.ArticleServices.Dto
{
    public class ArticleDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Description { get; set; }
        public string IconImagePath { get; set; }
        public long ViewCount { get; set; }
        public TopicCodeEnum? Topic { get; set; }
        public DateTime? CreationTime { get; set; }
        public int Rate { get; set; }

        //Hello
        //public DateTime? CreationTime { get; set; }
        //public DateTime? LastmodificationTime { get; set; }
    }
}
