import { Meta, StoryObj } from '@storybook/react';

import { ProductRating } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductRating',
  component: ProductRating,
  args: {
    score: 4.2,
    numReviews: 54,
    inStock: true,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductRating>;

export const Default: Story = {};
