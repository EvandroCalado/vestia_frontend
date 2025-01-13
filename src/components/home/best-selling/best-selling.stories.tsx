import { productList } from '@/utils';
import { Meta, StoryObj } from '@storybook/react';

import { BestSelling } from '.';

const meta: Meta = {
  title: 'Components/Home/BestSelling',
  component: BestSelling,
  args: {
    products: productList,
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BestSelling>;

export const Default: Story = {};
