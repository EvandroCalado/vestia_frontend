import { Meta, StoryObj } from '@storybook/react';

import { ProductAddToCart } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductAddToCart',
  component: ProductAddToCart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductAddToCart>;

export const Default: Story = {};
