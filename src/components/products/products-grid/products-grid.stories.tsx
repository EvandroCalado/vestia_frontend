import { Meta, StoryObj } from '@storybook/react';

import { productList } from '@/utils';
import { ProductsGrid } from '.';

const meta: Meta = {
  title: 'Components/Products/ProductsGrid',
  component: ProductsGrid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductsGrid>;

export const Default: Story = {
  render: () => (
    <div className='container mx-auto p-5'>
      <ProductsGrid products={productList} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className='container mx-auto p-5'>
      <ProductsGrid />
    </div>
  ),
};
