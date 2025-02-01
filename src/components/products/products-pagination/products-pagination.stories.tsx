import { Meta, StoryObj } from '@storybook/react';

import { ProductsPagination } from '.';

const meta: Meta = {
  title: 'Components/Products/ProductsPagination',
  component: ProductsPagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductsPagination>;

export const Default: Story = {};
