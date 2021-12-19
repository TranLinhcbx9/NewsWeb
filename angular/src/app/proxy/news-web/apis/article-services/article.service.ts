import type { ArticleDto, IconImageDto, InputAIDto } from './dto/models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiName = 'Default';

  createByInput = (input: ArticleDto) =>
    this.restService.request<any, ArticleDto>({
      method: 'POST',
      url: '/api/app/article',
      body: input,
    },
    { apiName: this.apiName });

  createManyByInput = (input: ArticleDto) =>
    this.restService.request<any, ArticleDto>({
      method: 'POST',
      url: '/api/app/article/many',
      body: input,
    },
    { apiName: this.apiName });

  dataLabelByInput = (input: InputAIDto) =>
    this.restService.request<any, number>({
      method: 'POST',
      url: '/api/app/article/data-label',
      body: input,
    },
    { apiName: this.apiName });

  deleteById = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/article/${id}`,
    },
    { apiName: this.apiName });

  getAllPaggingByParamAndSearchText = (param: PagedAndSortedResultRequestDto, searchText: string) =>
    this.restService.request<any, ArticleDto[]>({
      method: 'GET',
      url: '/api/app/article/pagging',
      params: { skipCount: param.skipCount, maxResultCount: param.maxResultCount, sorting: param.sorting, searchText },
    },
    { apiName: this.apiName });

  updateByInput = (input: ArticleDto) =>
    this.restService.request<any, ArticleDto>({
      method: 'PUT',
      url: '/api/app/article',
      body: input,
    },
    { apiName: this.apiName });

  updateIconImageByInput = (input: IconImageDto) =>
    this.restService.request<any, string>({
      method: 'PUT',
      responseType: 'text',
      url: '/api/app/article/icon-image',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
