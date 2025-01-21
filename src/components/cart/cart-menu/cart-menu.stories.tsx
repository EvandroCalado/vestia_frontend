import { Meta, StoryObj } from '@storybook/react';

import { CartMenu } from '.';

const cartItems = [
  {
    id: 400,
    image: '/images/product1.png',
    title: 'raw black t-shirt lineup',
    quantity: 2,
    price: 75,
    size: 'm',
  },
  {
    id: 4001,
    image: '/images/product2.png',
    title: 'Essential Neutrals',
    quantity: 3,
    price: 22,
    size: 's',
  },
];

const meta: Meta = {
  title: 'Components/Cart/CartMenu',
  component: CartMenu,
  args: {
    cartItems,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CartMenu>;

export const Default: Story = {};
