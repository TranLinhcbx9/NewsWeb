using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewsWeb.APIs.ArticleServices.Dto
{
    public class IconImageDto
    {
        public IFormFile File { get; set; }
        public Guid ArticleId { get; set; }
    }
}
