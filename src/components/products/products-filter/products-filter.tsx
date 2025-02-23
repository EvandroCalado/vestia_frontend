'use client';

import { useState } from 'react';

import { Filter, X } from 'lucide-react';

import { Button } from '@/components/ui';
import { ProductsCategoriesFilter } from '../products-categories-filter';
import { ProductsColorsFilter } from '../products-colors-filter';
import { ProductsPriceFilter } from '../products-price-filter';
import { ProductsSearch } from '../products-search';
import { ProductsSizesFilter } from '../products-sizes-filter';

type ProductsFilterProps = {
  refetchProducts: () => Promise<void>;
};

export const ProductsFilter = ({ refetchProducts }: ProductsFilterProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className='relative'>
      <div className='absolute left-2 top-2 flex items-center gap-2 md:hidden'>
        <Button size='icon' onClick={() => setIsOpenMenu(true)}>
          <Filter />
        </Button>
        <h3>Filters</h3>
      </div>

      <div
        className={`h-max rounded-lg border bg-white px-5 py-3 md:block md:w-72 md:p-5 ${isOpenMenu ? 'block transition-all duration-150 max-md:fixed max-md:inset-0 max-md:z-20 max-md:h-full' : 'hidden'}`}
      >
        <Button
          type='button'
          size='icon'
          variant='secondary'
          className='absolute right-2 top-2 md:hidden'
          onClick={() => setIsOpenMenu(false)}
        >
          <X />
        </Button>

        <ProductsSearch refetchProducts={refetchProducts} />
        <ProductsCategoriesFilter refetchProducts={refetchProducts} />
        <ProductsColorsFilter refetchProducts={refetchProducts} />
        <ProductsSizesFilter refetchProducts={refetchProducts} />
        <ProductsPriceFilter refetchProducts={refetchProducts} />
      </div>
    </div>
  );
};
