import { Meta, StoryObj } from '@storybook/react';

import { CartItem } from '.';

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

const meta: Meta = {
  title: 'Components/Cart/CartItem',
  component: CartItem,
  args: { items },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {};

export const OnMenu: Story = {
  args: {
    onMenu: true,
  },
};
