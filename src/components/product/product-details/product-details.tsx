import { Button } from '@/components/ui';
import { HeartIcon } from '@/icons';

import { ProductColors } from '../product-colors';
import { ProductPrice } from '../product-price';
import { ProductQuantity } from '../product-quantity';
import { ProductRating } from '../product-rating';
import { ProductSizes } from '../product-sizes';

type Colors = {
  name: string;
  color: string;
};

type ProductDetailsProps = {
  title: string;
  score: number;
  numReviews: number;
  inStock: boolean;
  price: number;
  colors: Colors[];
  sizes: string[];
  quantity: number;
};

export const ProductDetails = ({
  title,
  score,
  numReviews,
  inStock,
  price,
  colors,
  sizes,
  quantity,
}: ProductDetailsProps) => {
  return (
    <div className='space-y-8'>
      <h2 className='capitalize'>{title}</h2>

      <ProductRating score={score} numReviews={numReviews} inStock={inStock} />
      <ProductPrice price={price} />
      <ProductColors colors={colors} />
      <ProductSizes sizes={sizes} />
      <ProductQuantity quantity={quantity} />

      {/* add to cart */}
      <div className='flex flex-col items-start space-y-4'>
        <div className='flex items-center w-full gap-4'>
          <Button className='w-full md:w-72'>Add to cart</Button>
          <Button variant='outline' size='icon'>
            <HeartIcon />
          </Button>
        </div>
        <h6 className='flex items-center justify-center gap-2 uppercase text-muted-foreground'>
          <span className='bg-muted-foreground w-4 h-0.5 inline-block' />
          free shipping on orders $100+
        </h6>
      </div>
    </div>
  );
};
