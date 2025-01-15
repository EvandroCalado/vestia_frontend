'use client';

import { useState } from 'react';

import { Button } from '@/components/ui';
import { MinusIcon, PlusIcon } from 'lucide-react';

type ProductQuantityProps = {
  quantity: number;
};

export const ProductQuantity = ({ quantity }: ProductQuantityProps) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const checkQuantity = (qtd: number) => {
    if (qtd < 1) setCurrentQuantity(1);

    if (qtd > quantity) setCurrentQuantity(quantity);

    return qtd;
  };

  return (
    <div className='space-y-4 text-start'>
      <h5 className='font-normal uppercase text-muted-foreground'>quantity</h5>
      <div className='flex items-center border-[1px] rounded-md border-gray-200 w-max'>
        <Button
          variant='ghost'
          className='w-9 h-9'
          onClick={() => setCurrentQuantity(currentQuantity - 1)}
        >
          <MinusIcon />
        </Button>
        <span className='flex items-center justify-center w-9 h-9'>
          {checkQuantity(currentQuantity)}
        </span>
        <Button
          variant='ghost'
          className='w-9 h-9'
          onClick={() => setCurrentQuantity(currentQuantity + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};
