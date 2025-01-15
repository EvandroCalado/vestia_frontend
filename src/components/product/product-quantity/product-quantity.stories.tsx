import { Meta, StoryObj } from '@storybook/react';

import { ProductQuantity } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductQuantity',
  component: ProductQuantity,
  args: {
    quantity: 5,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductQuantity>;

export const Default: Story = {};
