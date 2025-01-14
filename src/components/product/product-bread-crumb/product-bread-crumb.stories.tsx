import { Meta, StoryObj } from '@storybook/react';

import { ProductBreadCrumb } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductBreadCrumb',
  component: ProductBreadCrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductBreadCrumb>;

export const Default: Story = {};
