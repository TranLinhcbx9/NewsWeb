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
        public long ViewCount { get; set; }
        public TopicCodeEnum? Topic { get; set; }
    }
}
