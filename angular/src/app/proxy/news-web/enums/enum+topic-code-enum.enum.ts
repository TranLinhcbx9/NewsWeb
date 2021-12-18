import { mapEnumToOptions } from '@abp/ng.core';

export enum EnumTopicCodeEnum {
  __label__công_nghệ = 0,
  __label__du_lịch = 1,
  __label__giáo_dục = 2,
  __label__giải_trí = 3,
  __label__kinh_doanh = 4,
  __label__nhịp_sống = 5,
  __label__phim_ảnh = 6,
  __label__pháp_luật = 7,
  __label__sống_trẻ = 8,
  __label__sức_khỏe = 9,
  __label__thế_giới = 10,
  __label__thể_thao = 11,
  __label__thời_sự = 12,
  __label__thời_trang = 13,
  __label__xe_360 = 14,
  __label__xuất_bản = 15,
  __label__âm_nhạc = 16,
  __label__ẩm_thực = 17,
}

export const enumTopicCodeEnumOptions = mapEnumToOptions(EnumTopicCodeEnum);
