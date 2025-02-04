'use server';

import { STRAPI_URL } from '@/lib/utils';
import { productsMapper } from '@/mappers';
import { StrapiAllProducts } from '@/types';

type SearchParams = { [key: string]: string | string[] | undefined };

export const getAllProductsAction = async (searchParams: SearchParams) => {
  const paramCategories = Array.isArray(searchParams.categories)
    ? searchParams.categories
    : [searchParams.categories].filter(Boolean);

  const queryCategories = paramCategories
    .map((category) => `&filters[categories][$eq]=${category}`)
    .join('');

  const queryColor = searchParams.color
    ? `&filters[variant][title][$eq]=${searchParams.color}`
    : '';

  const querySize = searchParams.size
    ? `&filters[variant][size][$eq]=${searchParams.size}`
    : '';

  const queryPrice =
    searchParams.price && Number(searchParams.price) > 0
      ? `&filters[variant][price][$lte]=${searchParams.price}`
      : '';

  const url = new URL(
    `/api/products?populate[variant][populate][0]=images${queryCategories}${queryColor}${querySize}${queryPrice}`,
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
