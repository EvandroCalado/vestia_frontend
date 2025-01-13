import { BestSelling, Hero, Services } from '@/components/home';
import { productList } from '@/utils';

const firstHero = {
  title: 'Fresh Arrivals Online',
  description: 'Discover Our Newest Collection Today.',
  buttonLabel: 'View Collection',
  image: '/images/hero1.png',
};

const secondHero = {
  title: 'Browse Our Fashion Paradise!',
  description:
    'Step into a world of style and explore our diverse collection of clothing categories.',
  buttonLabel: 'Start Browsing',
  image: '/images/hero2.png',
};

export const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-8'>
      <Hero {...firstHero} />
      <Services />
      <BestSelling products={productList} />
      <Hero {...secondHero} />
    </div>
  );
};

export default HomePage;
