'use client';

import { useVariants } from '@/hooks';
import { currencyFormat } from '@/utils';
import { Variant } from '../product-details';

type ProductPriceProps = {
  variants: Variant[];
};

export const ProductPrice = ({ variants }: ProductPriceProps) => {
  const { currentVariant } = useVariants(variants);

  return <h3>{currencyFormat(currentVariant.price)}</h3>;
};
