'use server';

import { STRAPI_URL } from '@/lib/utils';
import { bannerMapper } from '@/mappers';
import { StrapiBannersType } from '@/types';

export const getBannersAction = async () => {
  const url = new URL('/api/banners?populate=*', STRAPI_URL);

  try {
    const response = await fetch(url);
    const banners: StrapiBannersType = await response.json();

    return bannerMapper(banners);
  } catch (error) {
    console.error('Get banners action:', error);
  }
};
