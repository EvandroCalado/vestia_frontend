import { Meta, StoryObj } from '@storybook/react';

import { ProductSlide } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductSlide',
  component: ProductSlide,
  args: {
    images: [
      '/images/slide1.png',
      '/images/slide2.png',
      '/images/slide3.png',
      '/images/slide4.png',
    ],
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductSlide>;

export const Default: Story = {};
