import { ProductsFilter } from '@/components/products';
import { Breadcrumb } from '@/components/shared';

const ProductsPage = () => {
  return (
    <div className='container mx-auto space-y-8 p-5'>
      <Breadcrumb />

      <div>
        <ProductsFilter />
      </div>
    </div>
  );
};

export default ProductsPage;
