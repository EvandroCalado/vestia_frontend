import { DeliveryIcon, ShieldCheckIcon, StarBadgeIcon } from '@/icons';

const items = [
  {
    id: 1,
    icon: <DeliveryIcon />,
    title: 'free shipping',
    description:
      'Upgrade your style today and get FREE shipping on all orders! Don´t miss out.',
  },
  {
    id: 2,
    icon: <StarBadgeIcon />,
    title: 'satisfaction guarantee',
    description:
      'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.',
  },
  {
    id: 3,
    icon: <ShieldCheckIcon />,
    title: 'Secure Payment',
    description:
      'Your security is our priority. Your payments are secure with us.',
  },
];

export const Services = () => {
  return (
    <section className='container grid gap-8 p-5 mx-auto md:grid-cols-3'>
      {items.map((item) => (
        <div
          key={item.id}
          className='w-full md:max-w-xs space-y-2 max-md:mx-auto [&>svg]:mb-6'
        >
          {item.icon}

          <h5 className='font-normal capitalize'>{item.title}</h5>
          <p className='text-sm text-muted-foreground'>{item.description}</p>
        </div>
      ))}
    </section>
  );
};
