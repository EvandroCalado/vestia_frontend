import { revalidateTag } from 'next/cache';
import { notFound } from 'next/navigation';

import { SearchParams } from 'nuqs';

import { getAllProductsAction } from '@/actions';
import { loadSearchParams } from '@/app/search-params';
import {
  ProductsFilter,
  ProductsGrid,
  ProductsPagination,
} from '@/components/products';
import { Breadcrumb } from '@/components/shared';

type ProductsPageProps = {
  searchParams: Promise<SearchParams>;
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const { categories, color, size, price, page } =
    await loadSearchParams(searchParams);

  const { products, pagination } = await getAllProductsAction({
    categories,
    color,
    size,
    price,
    page,
  });

  if (!products) notFound();

  const refetchProducts = async () => {
    'use server';

    revalidateTag('products');
  };

  return (
    <div className='container mx-auto space-y-8 p-5'>
      <Breadcrumb />

      <div className='flex w-full justify-center gap-8'>
        <ProductsFilter refetchProducts={refetchProducts} />
        <ProductsGrid products={products} />
      </div>

      <ProductsPagination pagination={pagination} />
    </div>
  );
};

export default ProductsPage;
