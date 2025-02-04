import { PackageOpen } from 'lucide-react';

import { ProductCard } from '@/components/product';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { Product } from '@/types';
import { ProductsCleanFilter } from '../products-clean-filter';

const categoriesList = [
  'shirts',
  'pants',
  'jackets',
  'shorts',
  'activewear',
  'accessories',
];

type ProductsGridProps = {
  products?: Product[];
};

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  if (!products || products.length === 0) {
    return (
      <div className='flex h-[50vh] w-full flex-col items-center justify-center gap-6'>
        <h2>Products not found</h2>

        <p className='text-zinc-400'>
          Select another filter or use the search bar to find what you&apos;re
          looking for.
        </p>

        <PackageOpen size={40} className='animate-bounce' />
      </div>
    );
  }

  return (
    <div>
      <ProductsCleanFilter />

      <div className='flex items-center justify-between text-zinc-400'>
        <span className='text-xs sm:text-sm'>Showing 1-9 of 36 results</span>

        <Select>
          <SelectTrigger className='w-28 sm:w-40'>
            <SelectValue placeholder='SORT BY' />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {categoriesList.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className='capitalize'
                >
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='mx-auto my-8 grid w-full gap-8 lg:grid-cols-2 xl:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
