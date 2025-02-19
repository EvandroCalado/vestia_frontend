import { Meta, StoryObj } from '@storybook/react';

import { ProductsSearch } from './products-search';

const meta: Meta = {
  title: 'Components/Products/ProductsSearch',
  component: ProductsSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductsSearch>;

export const Default: Story = {};
