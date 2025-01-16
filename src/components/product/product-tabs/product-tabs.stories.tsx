import { Meta, StoryObj } from '@storybook/react';

import { ProductTabs } from '.';

const details = `<p>
          Elevate your everyday style with our Men's Black T-Shirts, the
          ultimate wardrobe essential for modern men. Crafted with meticulous
          attention to detail and designed for comfort, these versatile black
          tees are a must-have addition to your collection. The classic black
          color never goes out of style. Whether you're dressing up for a
          special occasion or keeping it casual, these black t-shirts are the
          perfect choice, effortlessly complementing any outfit.
        </p>
        <ul>
          <li>Premium Quality</li>
          <li>Versatile Wardrobe Staple</li>
          <li>Available in Various Sizes</li>
          <li>Tailored Fit</li>
        </ul>`;

const meta: Meta = {
  title: 'Components/Product/ProductTabs',
  component: ProductTabs,
  args: {
    description: details,
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductTabs>;

export const Default: Story = {};
