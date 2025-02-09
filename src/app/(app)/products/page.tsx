import { notFound } from 'next/navigation';

import { getAllProductsAction } from '@/actions';
import {
  ProductsFilter,
  ProductsGrid,
  ProductsPagination,
} from '@/components/products';
import { Breadcrumb } from '@/components/shared';

type ProductsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const params = await searchParams;

  const { products } = await getAllProductsAction(params);

  if (!products) notFound();

  return (
    <div className='container mx-auto space-y-8 p-5'>
      <Breadcrumb />

      <div className='flex w-full justify-center gap-8'>
        <ProductsFilter />
        <ProductsGrid products={products} />
      </div>

      <ProductsPagination />
    </div>
  );
};

export default ProductsPage;
