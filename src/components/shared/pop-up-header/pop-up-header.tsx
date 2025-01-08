'use client';

import { useState } from 'react';

import { CloseIcon } from '@/icons';

export const PopUpHeader = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className='relative bg-primary text-white w-full p-2'>
      <h6 className='text-center'>
        Get 25% OFF on your first order. <strong>Order Now</strong>
      </h6>

      <button
        onClick={() => setOpen(false)}
        className='absolute right-2 top-1/2 -translate-y-1/2'
      >
        <CloseIcon />
      </button>
    </div>
  );
};
