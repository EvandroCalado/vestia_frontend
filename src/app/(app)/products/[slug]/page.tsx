import { notFound } from 'next/navigation';

import { getProductBySlugAction } from '@/actions';
import {
  ProductBreadCrumb,
  ProductDetails,
  ProductSlide,
  ProductTabs,
} from '@/components/product';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug } = await params;
  const product = await getProductBySlugAction(slug);

  if (!product) notFound();

  return (
    <div className='container mx-auto space-y-8 p-5'>
      <ProductBreadCrumb />

      <div className='grid gap-8 md:mx-16 md:grid-cols-2 md:gap-16'>
        <ProductSlide variants={product.variants} />
        <ProductDetails {...product} />
      </div>

      <ProductTabs description={product.description} />
    </div>
  );
};

export default ProductPage;
