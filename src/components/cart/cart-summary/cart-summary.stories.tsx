import { Meta, StoryObj } from '@storybook/react';

import { CartSummary } from '.';

const meta: Meta = {
  title: 'Components/Cart/CartSummary',
  component: CartSummary,
  args: {
    subtotal: 90,
    tax: 3,
    total: 100,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CartSummary>;

export const Default: Story = {};
