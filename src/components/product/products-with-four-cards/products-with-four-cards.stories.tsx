import { productList } from '@/utils';
import { Meta, StoryObj } from '@storybook/react';

import { ProductsWithFourCards } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductsWithFourCards',
  component: ProductsWithFourCards,
  args: {
    products: productList,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductsWithFourCards>;

export const Default: Story = {};
