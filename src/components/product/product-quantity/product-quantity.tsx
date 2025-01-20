'use client';

import { Button } from '@/components/ui';
import { useVariants } from '@/hooks';
import { useVariantStore } from '@/stores';
import { MinusIcon, PlusIcon } from 'lucide-react';

import { Variant } from '../product-details';

type ProductQuantityProps = {
  variants: Variant[];
};

export const ProductQuantity = ({ variants }: ProductQuantityProps) => {
  const { quantity, incQuantity, decQuantity } = useVariantStore();

  const { currentQuantity } = useVariants(variants);

  return (
    <div className='space-y-4 text-start'>
      <h5 className='font-normal uppercase text-muted-foreground'>quantity</h5>
      <div className='flex items-center border-[1px] rounded-md border-gray-200 w-max'>
        <Button variant='ghost' className='w-9 h-9' onClick={decQuantity}>
          <MinusIcon />
        </Button>
        <span className='flex items-center justify-center w-9 h-9'>
          {quantity}
        </span>
        <Button
          variant='ghost'
          className='w-9 h-9'
          onClick={() => incQuantity(currentQuantity)}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
