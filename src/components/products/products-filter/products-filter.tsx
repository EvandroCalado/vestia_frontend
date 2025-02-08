import { Button } from '@/components/ui';
import { ProductsCategoriesFilter } from '../products-categories-filter';
import { ProductsColorsFilter } from '../products-colors-filter';
import { ProductsPriceFilter } from '../products-price-filter';

const sizes = ['s', 'm', 'x', 'xl', 'xxl'];

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

      {/* colors */}
      <ProductsColorsFilter />

      {/* size */}
      <div className='border-b border-zinc-200 pb-10'>
        <h5 className='mb-6 font-medium capitalize'>sizes</h5>

        <div className='flex flex-wrap items-center gap-4'>
          {sizes.map((size) => (
            <div key={size} className='relative h-10 w-10'>
              <input
                type='radio'
                name='size'
                radioGroup='size'
                value={size}
                defaultChecked={size === params.size}
                className={`h-10 w-10 cursor-pointer appearance-none rounded border checked:border-black checked:ring-offset-2 focus:outline-none`}
              />
              <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                {size}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* price */}
      <ProductsPriceFilter paramPrice={params.price} />

      <Button className='w-full' type='submit'>
        Apply
      </Button>
    </form>
  );
};
