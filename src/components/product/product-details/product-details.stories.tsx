import { Meta, StoryObj } from '@storybook/react';

import { ProductDetails } from '.';

const rating = {
  score: 4.2,
  numReviews: 54,
};

const meta: Meta = {
  title: 'Components/Product/ProductDetails',
  component: ProductDetails,
  args: {
    title: 'raw black t-shirt lineup',
    rating: rating,
    inStock: true,
    price: 75,
    colors: ['#9fbcf4', '#ffd792', '#7eb28e'],
    sizes: ['s', 'x', 'xl'],
    quantity: 5,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductDetails>;

export const Default: Story = {};
