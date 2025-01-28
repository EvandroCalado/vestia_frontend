import { CartItems, CartSummary } from '@/components/cart';
import { Breadcrumb } from '@/components/shared';

const CartPage = () => {
  return (
    <div className='container relative mx-auto h-full p-5'>
      <Breadcrumb />

      <div className='grid pt-10 md:grid-cols-2 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h4>You cart</h4>
          <CartItems />
        </div>

        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
