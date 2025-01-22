import { STRAPI_URL } from '@/lib/utils';
import { bestSellingProductMapper } from '@/mappers';
import { StrapiProductsType } from '@/types';

export const getBestSellingProductsAction = async () => {
  const url = new URL(
    '/api/products?populate[variant][populate][0]=images&filters[isBestSelling][$eq]=true',
    STRAPI_URL,
  );

  try {
    const response = await fetch(url);
    const bestSellingProducts: StrapiProductsType = await response.json();

    if (!response.ok) {
      throw new Error('Products not fond.');
    }

    return bestSellingProductMapper(bestSellingProducts);
  } catch (error) {
    console.log(error);
    throw new Error('Internal server error.');
  }
};
