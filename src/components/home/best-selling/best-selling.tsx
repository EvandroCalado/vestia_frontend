import { getBestSellingProductsAction } from '@/actions';
import { ProductCard } from '@/components/product';
import { notFound } from 'next/navigation';

export const BestSelling = async () => {
  const bestSellingProducts = await getBestSellingProductsAction();

  if (!bestSellingProducts) notFound();

  return (
    <section className='container flex flex-col items-center justify-center gap-16 p-5 mx-auto'>
      <div>
        <h6 className='font-light uppercase text-muted-foreground'>shop now</h6>
        <h3>Best Selling</h3>
      </div>

      <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {bestSellingProducts?.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </section>
  );
};
