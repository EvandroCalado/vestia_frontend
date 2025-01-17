'use server';

import { STRAPI_URL } from '@/lib/utils';
import { bannerMapper } from '@/mappers';
import { StrapiBannersType } from '@/types';

export const getBannersAction = async () => {
  const url = new URL('/api/banners?populate=*', STRAPI_URL);

  const response = await fetch(url);
  const banners: StrapiBannersType = await response.json();

  if (!banners.data) {
    return [];
  }

  return bannerMapper(banners);
};
