'use server';

import { STRAPI_URL } from '@/lib/utils';
import { StrapiBannersType } from '@/types';

export const getBannersAction = async () => {
  const url = new URL('/api/banners?populate=*', STRAPI_URL);

  const response = await fetch(url);
  const banners: StrapiBannersType = await response.json();

  if (!banners.data) {
    return [];
  }

  const bannersMapper = banners.data.map((banner) => {
    return {
      title: banner.title,
      description: banner.description,
      button: {
        title: banner.button.title,
        href: banner.button.href,
      },
      image: banner.image.formats.medium.url,
    };
  });

  return bannersMapper;
};
