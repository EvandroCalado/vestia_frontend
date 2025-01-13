import { productList } from '@/utils';
import { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductCard',
  component: ProductCard,
  args: {
    ...productList[0],
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};
