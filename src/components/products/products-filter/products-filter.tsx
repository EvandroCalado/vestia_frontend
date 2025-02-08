import { Button } from '@/components/ui';
import { ProductsCategoriesFilter } from '../products-categories-filter';
import { ProductsColorsFilter } from '../products-colors-filter';
import { ProductsPriceFilter } from '../products-price-filter';
import { ProductsSizesFilter } from '../products-sizes-filter';

type ProductsFilterProps = {
  params: { [key: string]: string | string[] | undefined };
};

export const ProductsFilter = ({ params }: ProductsFilterProps) => {
  return (
    <form
      action='/products'
      className='hidden h-max w-72 space-y-8 rounded-lg border px-5 py-7 md:block'
    >
      <ProductsCategoriesFilter />
      <ProductsColorsFilter />
      <ProductsSizesFilter />
      <ProductsPriceFilter paramPrice={params.price} />

      <Button className='w-full' type='submit'>
        Apply
      </Button>
    </form>
  );
};
