import {
  ProductBreadCrumb,
  ProductDetails,
  ProductSlide,
  ProductTabs,
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
  colors: [
    {
      name: 'blue',
      color: '#9fbcf4',
    },
    {
      name: 'yellow',
      color: '#ffd792',
    },
    {
      name: 'green',
      color: '#7eb28e',
    },
  ],
  sizes: ['s', 'l', 'xl'],
  quantity: 5,
};

const description = `<p>
          Elevate your everyday style with our Men's Black T-Shirts, the
          ultimate wardrobe essential for modern men. Crafted with meticulous
          attention to detail and designed for comfort, these versatile black
          tees are a must-have addition to your collection. The classic black
          color never goes out of style. Whether you're dressing up for a
          special occasion or keeping it casual, these black t-shirts are the
          perfect choice, effortlessly complementing any outfit.
        </p>
        <ul>
          <li>Premium Quality</li>
          <li>Versatile Wardrobe Staple</li>
          <li>Available in Various Sizes</li>
          <li>Tailored Fit</li>
        </ul>`;

const ProductPage = () => {
  return (
    <div className='container p-5 mx-auto space-y-8'>
      <ProductBreadCrumb />

      <div className='grid gap-8 md:mx-16 md:grid-cols-2 md:gap-16'>
        <ProductSlide images={images} />
        <ProductDetails {...productDetails} />
      </div>

      <ProductTabs description={description} />
    </div>
  );
};

export default ProductPage;
