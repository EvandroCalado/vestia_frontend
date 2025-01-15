import { Meta, StoryObj } from '@storybook/react';

import { ProductColors } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductColors',
  component: ProductColors,
  args: {
    colors: [
      {
        name: 'blue',
        color: '#9fbcf4',
      },
      {
        name: 'yellow',
        color: '#ffd792',
      },
      {
        name: 'green',
        color: '#7eb28e',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductColors>;

export const Default: Story = {};
