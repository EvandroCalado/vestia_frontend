import { getProductBySlugAction } from '@/actions';
import {
  ProductBreadCrumb,
  ProductDetails,
  ProductSlide,
  ProductTabs,
} from '@/components/product';
import { notFound } from 'next/navigation';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlugAction(slug);

  if (!product) notFound();

  return (
    <div className='container p-5 mx-auto space-y-8'>
      <ProductBreadCrumb />

      <div className='grid gap-8 md:mx-16 md:grid-cols-2 md:gap-16'>
        <ProductSlide images={product?.variants[0].images} />
        <ProductDetails {...product} />
      </div>

      <ProductTabs description={product.description} />
    </div>
  );
};

export default ProductPage;
