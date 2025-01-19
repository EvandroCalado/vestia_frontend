'use client';

import { cn } from '@/lib/utils';
import { useVariantStore } from '@/stores';

import { Variant } from '../product-details';

const allSizes = ['s', 'm', 'x', 'xl', 'xxl'];

type ProductSizesProps = {
  variants: Variant[];
};

export const ProductSizes = ({ variants }: ProductSizesProps) => {
  const { color, size, setSize } = useVariantStore();

  const currentSizes = variants
    .filter((variant) => variant.title === color)
    .map((variant) => variant.size);

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
              'w-9 h-9 uppercase border-[1px] rounded-md border-gray-200 duration-150 hover:border-primary',
              {
                'disabled:opacity-30 hover:border-gray-200':
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
