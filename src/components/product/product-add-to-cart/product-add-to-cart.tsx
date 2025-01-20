'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui';
import { useValidationMessage } from '@/hooks';
import { HeartIcon } from '@/icons';
import { useVariantStore } from '@/stores';

export const ProductAddToCart = () => {
  const { color, size, reset } = useVariantStore();
  const colorValidation = useValidationMessage(color, 'Please select a color.');
  const sizeValidation = useValidationMessage(size, 'Please select a size.');

  const handleAddToCart = () => {
    colorValidation.validate();
    sizeValidation.validate();
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <div className='flex flex-col items-start space-y-4'>
      <div className='flex items-center w-full gap-4'>
        <Button className='w-full md:w-72' onClick={handleAddToCart}>
          Add to cart
        </Button>
        <Button variant='outline' size='icon'>
          <HeartIcon />
        </Button>
      </div>

      <div className='flex items-center gap-4'>
        {colorValidation.showMessage && (
          <p className='text-destructive text-xs'>{colorValidation.message}</p>
        )}
        {sizeValidation.showMessage && (
          <p className='text-destructive text-xs'>{sizeValidation.message}</p>
        )}
      </div>

      <h6 className='flex items-center justify-center gap-2 uppercase text-muted-foreground'>
        <span className='bg-muted-foreground w-4 h-0.5 inline-block' />
        free shipping on orders $100+
      </h6>
    </div>
  );
};
