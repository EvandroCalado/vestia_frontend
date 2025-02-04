import { Meta, StoryObj } from '@storybook/react';

import { ProductsCleanFilter } from '.';

const meta: Meta = {
  title: 'Components/Products/ProductsCleanFilter',
  component: ProductsCleanFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductsCleanFilter>;

export const Default: Story = {};
