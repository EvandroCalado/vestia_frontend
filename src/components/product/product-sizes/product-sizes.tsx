'use client';

import { useVariants } from '@/hooks';
import { cn } from '@/lib/utils';
import { useVariantStore } from '@/stores';
import { Variant } from '../product-details';

type ProductSizesProps = {
  variants: Variant[];
  allSizes: string[];
};

export const ProductSizes = ({ variants, allSizes }: ProductSizesProps) => {
  const { size, setSize } = useVariantStore();

  const { currentSizes } = useVariants(variants);

  return (
    <div className='space-y-4'>
      <h5 className='font-normal uppercase text-muted-foreground'>
        select size
      </h5>
      <div className='flex items-center gap-4'>
        {allSizes.map((singleSize) => (
          <button
            key={singleSize}
            disabled={!currentSizes.includes(singleSize)}
            className={cn(
              'h-9 w-9 rounded-md border-[1px] border-gray-200 uppercase duration-150 hover:border-primary',
              {
                'hover:border-gray-200 disabled:opacity-30':
                  !currentSizes.includes(singleSize),
              },
              {
                'border-primary': singleSize === size,
              },
            )}
            onClick={() => setSize(singleSize)}
          >
            {singleSize}
          </button>
        ))}
      </div>
    </div>
  );
};
