'use server';

import { STRAPI_URL } from '@/lib/utils';
import { productsMapper } from '@/mappers';
import { StrapiAllProducts } from '@/types';

type SearchParams = { [key: string]: string | string[] | undefined };

export const getAllProductsAction = async (searchParams: SearchParams) => {
  console.log(searchParams);

  const url = new URL(
    `/api/products?populate[variant][populate][0]=images`,
    STRAPI_URL,
  );

  try {
    const response = await fetch(url);
    const products: StrapiAllProducts = await response.json();

    if (!response.ok) {
      throw new Error('Products not found.');
    }

    return productsMapper(products);
  } catch (error) {
    console.log(error);
    throw new Error('Internal server error.');
  }
};
