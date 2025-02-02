import { Meta, StoryObj } from '@storybook/react';

import { ProductCardPrice } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductCardPrice',
  component: ProductCardPrice,
  args: {
    variants: [
      {
        price: 20,
      },
      {
        price: 30,
      },
      {
        price: 40,
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductCardPrice>;

export const Default: Story = {};
