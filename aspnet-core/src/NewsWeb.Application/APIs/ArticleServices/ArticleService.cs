using NewsWeb.APIs.ArticleServices.Dto;
using NewsWeb.Entities;
using NewsWeb.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace NewsWeb.APIs.ArticleServices
{
    public class ArticleService : ApplicationService
    {
        private readonly IRepository<Article, Guid> _articleRepository;

        public ArticleService(IRepository<Article, Guid> articleRepository)
        {
            _articleRepository = articleRepository;
        }
        public async Task<List<ArticleDto>> GetAllPagging(int? skipCount, int maxResultCount, string searchText)
        {
            var cleanSearchText = Regex.Replace((searchText.Trim().ToLower()), @"\s+", " ");

            if (!skipCount.HasValue)
                skipCount = 0;
            var items = await _articleRepository.GetListAsync();
            var results = items.Where(x => String.IsNullOrEmpty(searchText) || x.Title.Contains(cleanSearchText))
                .Select(item => new ArticleDto
                {
                    Id = item.Id,
                    Title = item.Title,
                    Content = item.Content,
                    ViewCount = item.ViewCount
                });
            return results.Skip(skipCount.Value).Take(maxResultCount).ToList();
        }
        public async Task<ArticleDto> Create(ArticleDto input)
        {
            var article = new Article
            {
                //Id = input.Id,
                Content = input.Content,
                Title = input.Title,
                ViewCount = input.ViewCount
            };
            var todoItem = await _articleRepository.InsertAsync(article);

            return input;
        }
        public async Task<ArticleDto> Update(ArticleDto input)
        {
            var article = await _articleRepository.GetAsync(input.Id);
            article.Title = input.Title;
            article.Content = input.Content;
            article.ViewCount = input.ViewCount;
            return input;
        }
        public async Task Delete(Guid id)
        {
            await _articleRepository.DeleteAsync(id);
        }

    }
}
