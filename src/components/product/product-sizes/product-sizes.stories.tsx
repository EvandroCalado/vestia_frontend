import { Meta, StoryObj } from '@storybook/react';

import { ProductSizes } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductSizes',
  component: ProductSizes,
  args: {
    sizes: ['s', 'm', 'xxl'],
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductSizes>;

export const Default: Story = {};
