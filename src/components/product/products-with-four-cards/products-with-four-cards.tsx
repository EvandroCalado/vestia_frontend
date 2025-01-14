import { ProductCard, ProductCardProps } from '../product-card';

type ProductsWithFourCardsProps = {
  products: ProductCardProps[];
};

export const ProductsWithFourCards = ({
  products,
}: ProductsWithFourCardsProps) => {
  return (
    <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => (
        <ProductCard key={product.slug} {...product} />
      ))}
    </div>
  );
};
