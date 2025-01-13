import { ProductCard, ProductCardProps } from '@/components/product';

type BestSellingProps = {
  products: ProductCardProps[];
};

export const BestSelling = ({ products }: BestSellingProps) => {
  return (
    <section className='container flex flex-col items-center justify-center gap-16 p-5 mx-auto'>
      <div>
        <h6 className='font-light uppercase text-muted-foreground'>shop now</h6>
        <h3>Best Selling</h3>
      </div>

      <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
};
