import { ProductAddToCart } from '../product-add-to-cart';
import { ProductColors } from '../product-colors';
import { ProductPrice } from '../product-price';
import { ProductQuantity } from '../product-quantity';
import { ProductRating } from '../product-rating';
import { ProductSizes } from '../product-sizes';

export type Variant = {
  id: number;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  images: string[];
};

type ProductDetailsProps = {
  title: string;
  description: string;
  inStock: boolean;
  variants: Variant[];
};

const allSizes = ['s', 'm', 'x', 'xl', 'xxl'];

export const ProductDetails = ({
  title,
  inStock,
  variants,
}: ProductDetailsProps) => {
  return (
    <div className='space-y-8'>
      <h2 className='capitalize'>{title}</h2>

      <ProductRating score={2.5} numReviews={30} inStock={inStock} />
      <ProductPrice variants={variants} />
      <ProductColors variants={variants} />
      <ProductSizes variants={variants} allSizes={allSizes} />
      <ProductQuantity variants={variants} />
      <ProductAddToCart variants={variants} />
    </div>
  );
};
