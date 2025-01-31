import { ProductsFilter, ProductsGrid } from '@/components/products';
import { Breadcrumb } from '@/components/shared';
import { productList } from '@/utils';

const ProductsPage = () => {
  return (
    <div className='container mx-auto space-y-8 p-5'>
      <Breadcrumb />

      <div className='flex w-full gap-8'>
        <ProductsFilter />
        <ProductsGrid products={productList} />
      </div>
    </div>
  );
};

export default ProductsPage;
