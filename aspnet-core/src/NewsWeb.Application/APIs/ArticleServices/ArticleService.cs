using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NewsWeb.APIs.ArticleServices.Dto;
using NewsWeb.Entities;
using NewsWeb.Helper;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Cryptography.Xml;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using static NewsWeb.Enums.Enum;

namespace NewsWeb.APIs.ArticleServices
{
    public class ArticleService : ApplicationService
    {
        private readonly IRepository<Article, Guid> _articleRepository;
        private const string URL = "http://127.0.0.1:8000/";

        public ArticleService(IRepository<Article, Guid> articleRepository)
        {
            _articleRepository = articleRepository;
        }
        public async Task<List<ArticleDto>> GetAllPagging(int? skipCount, int maxResultCount, string searchText)
        {
            string cleanSearchText = "";
            if (!String.IsNullOrEmpty(searchText))
            {
                cleanSearchText = Regex.Replace((searchText.Trim().ToLower()), @"\s+", " ");
            }

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
            //var topicLabel = await DataLabel(new InputAIDto { text = input.Content });
            var article = new Article
            {
                //Id = input.Id,
                Content = input.Content,
                Title = input.Title,
                ViewCount = input.ViewCount,
                //Topic = (TopicCodeEnum)Enum.Parse(typeof(TopicCodeEnum), topicLabel)
            };
            
            var todoItem = await _articleRepository.InsertAsync(article);

            return input;
        }
        //public async Task<string> CreateLabel(string content)
        //{
        //    var topicLabel = await DataLabel(new InputAIDto { text = content });


        //}
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
        [HttpPost]
        public async Task<int> DataLabel(InputAIDto input)
        {
            //return await GetAsync<object>($"api/services/app/Users/GetUserToTimesheet?id={id}");
            var respone = await PostAsync<OutputAIDto>($"items/", input);
            var label = Int32.Parse(respone.label);
            return label;
        }

        private async Task<T> PostAsync<T>(string Url, object input)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                httpClient.BaseAddress = new System.Uri(URL);
                //httpClient.DefaultRequestHeaders.Add("accept", "application/xml");

                var contentString = new StringContent(JsonConvert.SerializeObject(input), Encoding.UTF8, "application/json");
                HttpResponseMessage response = new HttpResponseMessage();
                response = await httpClient.PostAsync(Url, contentString);
                if (response.IsSuccessStatusCode)
                {
                    var responseContent = await response.Content.ReadAsStringAsync();
                    //JObject res = JObject.Parse(responseContent);
                    var rs = JsonConvert.DeserializeObject<T>(responseContent);
                    return rs;
                }
                else
                {
                    return default;
                }
            }
        }

        //[HttpGet]
        //public async Task<object> GetData(string text)
        //{
        //    //return await GetAsync<object>($"api/services/app/Users/GetUserToTimesheet?id={id}");
        //    return await GetAsync($"items?{text}");
        //}
        //private async Task<object> GetAsync(string Url)
        //{
        //    using (var httpClient = new HttpClient())
        //    {
        //        httpClient.DefaultRequestHeaders.Accept.Clear();
        //        httpClient.BaseAddress = new System.Uri(URL);
        //        //httpClient.DefaultRequestHeaders.Add("X-Secret-Key", await settingManager.GetSettingValueForApplicationAsync(AppSettingNames.SecretCode));
        //        //var contentString = new StringContent(JsonConvert.SerializeObject(id), Encoding.UTF8, "application/json");
        //        HttpResponseMessage response = new HttpResponseMessage();
        //        try
        //        {
        //            response = await httpClient.GetAsync(Url);
        //        }
        //        catch (Exception)
        //        {

        //            throw new UserFriendlyException("Unable to connect to server HRM");
        //        }

        //        if (response.IsSuccessStatusCode)
        //        {
        //            //Content.Headers.ContentType.CharSet = @"utf-8";
        //            var responseContent = await response.Content.ReadAsStringAsync();
        //            //logger.LogInformation($"Get: {Url} response: {responseContent}");
        //            JObject res = JObject.Parse(responseContent);
        //            var rs = JsonConvert.DeserializeObject(JsonConvert.SerializeObject(res["result"]));
        //            return rs;
        //        }
        //        else
        //        {
        //            return default;
        //        }
        //    }
        //}

    }
}
