import { currencyFormat } from '@/utils';

type ProductPriceProps = {
  price: number;
};

export const ProductPrice = ({ price }: ProductPriceProps) => {
  return <h3>{currencyFormat(price)}</h3>;
};
