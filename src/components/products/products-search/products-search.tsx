'use client';

import { parseAsString, useQueryState } from 'nuqs';

import { Input } from '@/components/ui';
import { SearchIcon } from '@/icons';
import { cn } from '@/lib/utils';

type ProductsSearchProps = {
  refetchProducts: () => Promise<void>;
  className?: string;
};

export const ProductsSearch = ({
  refetchProducts,
  className,
}: ProductsSearchProps) => {
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault(''),
  );

  const handleSearch = (value: string) => {
    setSearch(value);

    setTimeout(() => {
      refetchProducts();
    });
  };

  return (
    <div className={cn('relative mb-4 w-full', className)}>
      <SearchIcon className='absolute left-2 top-1/2 -translate-y-1/2' />
      <Input
        type='search'
        name='search'
        placeholder='Search products'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className='pl-10'
      />
    </div>
  );
};
