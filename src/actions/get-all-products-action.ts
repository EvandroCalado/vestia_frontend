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
  sort: string;
  search: string;
};

export const getAllProductsAction = async (searchParams: SearchParams) => {
  const { categories, color, size, price, page, sort, search } = searchParams;

  const querySearch = search ? `&filters[title][$contains]=${search}` : '';
  const queryCategories = categories
    ? `&filters[categories][$eq]=${categories}`
    : '';
  const queryColor = color ? `&filters[variant][title][$eq]=${color}` : '';
  const querySize = size ? `&filters[variant][size][$eq]=${size}` : '';
  const queryPrice = price ? `&filters[variant][price][$lte]=${price}` : '';
  const queryPagination = `&pagination[page]=${page}&pagination[pageSize]=3`;
  const querySort = sort ? `&sort=title:${sort}` : '';

  const url = new URL(
    `/api/products?populate[variant][populate][0]=images${querySearch}${queryCategories}${queryColor}${querySize}${queryPrice}${queryPagination}${querySort}`,
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
