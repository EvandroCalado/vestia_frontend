import { BestSelling, Hero, Services } from '@/components/home';
import { productList } from '@/utils';

export const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-8'>
      <Hero />
      <Services />
      <BestSelling products={productList} />
    </div>
  );
};

export default HomePage;
