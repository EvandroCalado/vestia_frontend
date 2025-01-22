import { STRAPI_URL } from '@/lib/utils';
import { productBySlugMapper } from '@/mappers';
import { StrapiProductBySlugType } from '@/types';

export const getProductBySlugAction = async (slug: string) => {
  const url = new URL(
    `/api/products?populate[variant][populate][0]=images&filters[slug][$eq]=${slug}`,
    STRAPI_URL,
  );

  try {
    const response = await fetch(url);
    const product: StrapiProductBySlugType = await response.json();

    if (!response.ok) {
      throw new Error('Product not fond.');
    }

    return productBySlugMapper(product);
  } catch (error) {
    console.log(error);
    throw new Error('Internal server error.');
  }
};
