'use client';

import { PackageOpen } from 'lucide-react';
import { parseAsString, useQueryState } from 'nuqs';

import { ProductCard } from '@/components/product';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { Pagination, Product } from '@/types';

type ProductsGridProps = {
  products?: Product[];
  pagination: Pagination;
  refetchProducts: () => Promise<void>;
};

export const ProductsGrid = ({
  products,
  pagination,
  refetchProducts,
}: ProductsGridProps) => {
  const [sort, setSort] = useQueryState('sort', parseAsString.withDefault(''));
  const { page, pageSize, total } = pagination;

  const initialPageItem = pageSize * page - 2;
  const lastPageItem = pageSize * page >= total ? total : pageSize * page;
  const totalItem = total;

  const handleSort = (value: string) => {
    setSort(value);

    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

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
    <div className='mt-16 md:mt-0'>
      <div className='flex items-center justify-between text-zinc-400'>
        <span className='text-xs sm:text-sm'>
          Showing {initialPageItem}-{lastPageItem} of {totalItem} results
        </span>

        <Select value={sort} onValueChange={(value) => handleSort(value)}>
          <SelectTrigger className='w-28 sm:w-40'>
            <SelectValue placeholder='ORDER BY' />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value='asc'>Ascending</SelectItem>
              <SelectItem value='desc'>Descending</SelectItem>
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
