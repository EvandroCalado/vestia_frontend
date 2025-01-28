'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui';
import { useValidationMessage, useVariants } from '@/hooks';
import { HeartIcon } from '@/icons';
import { useCartStore, useVariantStore } from '@/stores';
import { Variant } from '../product-details';

type ProductAddToCartProps = {
  variants: Variant[];
};

export const ProductAddToCart = ({ variants }: ProductAddToCartProps) => {
  const { color, size, quantity, reset } = useVariantStore();
  const { addProductToCart } = useCartStore();
  const { currentVariant } = useVariants(variants);
  const colorValidation = useValidationMessage(color, 'Please select a color.');
  const sizeValidation = useValidationMessage(size, 'Please select a size.');

  const handleAddToCart = () => {
    colorValidation.validate();
    sizeValidation.validate();

    if (color && size) {
      addProductToCart({
        id: `${currentVariant.color}-${currentVariant.size}-${currentVariant.quantity}`,
        title: currentVariant.title,
        image: currentVariant.images[0],
        color,
        size,
        price: currentVariant.price,
        quantity,
      });
    }
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <div className='flex flex-col items-start space-y-4'>
      <div className='flex w-full items-center gap-4'>
        <Button className='w-full md:w-72' onClick={handleAddToCart}>
          Add to cart
        </Button>
        <Button variant='outline' size='icon'>
          <HeartIcon />
        </Button>
      </div>

      <div className='flex items-center gap-4'>
        {colorValidation.showMessage && (
          <p className='text-xs text-destructive'>{colorValidation.message}</p>
        )}
        {sizeValidation.showMessage && (
          <p className='text-xs text-destructive'>{sizeValidation.message}</p>
        )}
      </div>

      <h6 className='flex items-center justify-center gap-2 uppercase text-muted-foreground'>
        <span className='inline-block h-0.5 w-4 bg-muted-foreground' />
        free shipping on orders $100+
      </h6>
    </div>
  );
};
