import { HeroProps } from '@/components/home';
import { StrapiBannersType } from '@/types';

export const bannerMapper = (banners: StrapiBannersType): HeroProps[] =>
  banners.data.map((banner) => {
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
