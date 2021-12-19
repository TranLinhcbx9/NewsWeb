import type { EnumTopicCodeEnum } from '../../../enums/enum+topic-code-enum.enum';
import type { IFormFile } from '../../../../microsoft/asp-net-core/http/models';

export interface ArticleDto {
  id?: string;
  title?: string;
  content?: string;
  description?: string;
  iconImagePath?: string;
  viewCount: number;
  topic?: EnumTopicCodeEnum;
}

export interface IconImageDto {
  file: IFormFile;
  articleId?: string;
}

export interface InputAIDto {
  text?: string;
}
