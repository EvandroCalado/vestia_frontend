import {
  ProductsFilter,
  ProductsGrid,
  ProductsPagination,
} from '@/components/products';
import { Breadcrumb } from '@/components/shared';
import { productList } from '@/utils';

const ProductsPage = () => {
  return (
    <div className='container mx-auto space-y-8 p-5'>
      <Breadcrumb />

      <div className='flex w-full justify-center gap-8'>
        <ProductsFilter />
        <ProductsGrid products={productList} />
      </div>

      <ProductsPagination />
    </div>
  );
};

export default ProductsPage;
