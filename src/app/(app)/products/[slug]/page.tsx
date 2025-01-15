import {
  ProductBreadCrumb,
  ProductDetails,
  ProductSlide,
} from '@/components/product';

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png',
  '/images/slide4.png',
];

const productDetails = {
  title: 'raw black t-shirt lineup',
  score: 4.2,
  numReviews: 54,
  inStock: true,
  price: 75,
  colors: ['#9fbcf4', '#ffd792', '#7eb28e'],
  sizes: ['s', 'l', 'xl'],
  quantity: 5,
};

const ProductPage = () => {
  return (
    <div className='container p-5 mx-auto'>
      <ProductBreadCrumb />

      <div className='grid gap-8 md:mx-16 md:grid-cols-2 md:gap-16'>
        <ProductSlide images={images} />
        <ProductDetails {...productDetails} />
      </div>
    </div>
  );
};

export default ProductPage;
