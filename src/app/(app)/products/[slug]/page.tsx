import { ProductBreadCrumb, ProductSlide } from '@/components/product';

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png',
  '/images/slide4.png',
];

const ProductPage = () => {
  return (
    <div className='container mx-auto p-5'>
      <ProductBreadCrumb />
      <ProductSlide images={images} />
    </div>
  );
};

export default ProductPage;
