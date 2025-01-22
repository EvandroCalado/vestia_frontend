import { CartItems, CartSummary } from '@/components/cart';
import { Breadcrumb } from '@/components/shared';

const items = [
  {
    id: 1,
    title: 'raw black t-shirt lineup',
    image: '/images/product1.png',
    color: 'black',
    size: 'm',
    price: 75,
    quantity: 1,
  },
  {
    id: 2,
    title: 'essential neutrals',
    image: '/images/product2.png',
    color: 'white',
    size: 's',
    price: 22,
    quantity: 1,
  },
];

const summary = {
  subtotal: 90,
  tax: 3,
  total: 100,
};

const CartPage = () => {
  return (
    <div className='container mx-auto p-5'>
      <Breadcrumb />

      <div className='grid py-16 md:grid-cols-2 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h4>You cart</h4>
          <CartItems items={items} />
        </div>

        <CartSummary {...summary} />
      </div>
    </div>
  );
};

export default CartPage;
