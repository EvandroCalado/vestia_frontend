import { Variant } from '@/types';
import { currencyFormat } from '@/utils';

type ProductCardPriceProps = {
  variants: Variant[];
};

export const ProductCardPrice = ({ variants }: ProductCardPriceProps) => {
  const prices = variants.map((variant) => variant.price);
  const minValue = Math.min(...prices);
  const maxValue = Math.max(...prices);

  return (
    <p className='text-muted-foreground'>
      {currencyFormat(minValue)} - {currencyFormat(maxValue)}
    </p>
  );
};
