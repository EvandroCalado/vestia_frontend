import { Meta, StoryObj } from '@storybook/react';

import { ProductBreadCrumb } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductBreadCrumb',
  component: ProductBreadCrumb,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/products/sweatshirt-with-hood-and-pocket',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductBreadCrumb>;

export const Default: Story = {};
