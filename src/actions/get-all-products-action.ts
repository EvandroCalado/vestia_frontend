'use server';

import { STRAPI_URL } from '@/lib/utils';
import { productsMapper } from '@/mappers';
import { StrapiAllProducts } from '@/types';

type SearchParams = {
  categories: string;
  color: string;
  size: string;
  price: number;
  page: number;
};

export const getAllProductsAction = async (searchParams: SearchParams) => {
  const { categories, color, size, price, page } = searchParams;

  const queryCategories = categories
    ? `&filters[categories][$eq]=${categories}`
    : '';

  const queryColor = color ? `&filters[variant][title][$eq]=${color}` : '';

  const querySize = size ? `&filters[variant][size][$eq]=${size}` : '';

  const queryPrice = price ? `&filters[variant][price][$lte]=${price}` : '';

  const queryPagination = `&pagination[page]=${page}&pagination[pageSize]=3`;

  const url = new URL(
    `/api/products?populate[variant][populate][0]=images${queryCategories}${queryColor}${querySize}${queryPrice}${queryPagination}`,
    STRAPI_URL,
  );

  try {
    const response = await fetch(url, {
      next: { tags: ['products'] },
    });

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
