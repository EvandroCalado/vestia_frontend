import { Meta, StoryObj } from '@storybook/react';

import { ProductsFilter } from '.';

const meta: Meta = {
  title: 'Components/Products/ProductsFilter',
  component: ProductsFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductsFilter>;

export const Default: Story = {};
