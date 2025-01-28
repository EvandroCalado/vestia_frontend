'use client';

import Link from 'next/link';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { useLoaded } from '@/hooks';
import { useCartStore } from '@/stores';
import { currencyFormat } from '@/utils';
import { CartSummarySkeleton } from './cart-summary-skeleton';

export const CartSummary = () => {
  const loaded = useLoaded();
  const { getSummaryInfo } = useCartStore();

  const { subTotal, tax, total, totalProductsInCart } = getSummaryInfo();

  if (!loaded) {
    return <CartSummarySkeleton />;
  }

  if (totalProductsInCart === 0) return null;

  return (
    <Card className='w-full md:w-96'>
      <CardHeader>
        <CardTitle className='text-2xl'>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className='mx-5 space-y-6 border-b px-0 text-lg'>
        <div className='flex items-center justify-between'>
          <span className='text-muted-foreground'>Subtotal:</span>
          <span>{currencyFormat(subTotal)}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-muted-foreground'>Shipping:</span>
          <span>free</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-muted-foreground'>Tax:</span>
          <span>{currencyFormat(tax)}</span>
        </div>
      </CardContent>

      <CardFooter className='mt-5 flex flex-col gap-8'>
        <div className='flex w-full items-center justify-between'>
          <span>Total</span>
          <span>{currencyFormat(total)}</span>
        </div>
        <Button className='w-full' asChild>
          <Link href='/checkout'>Checkout</Link>
        </Button>
        <Link
          href='/products'
          className='underline underline-offset-4 duration-150 hover:text-muted-foreground'
        >
          Continue Shopping
        </Link>
      </CardFooter>
    </Card>
  );
};
