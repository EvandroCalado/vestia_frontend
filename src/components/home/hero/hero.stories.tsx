import { Meta, StoryObj } from '@storybook/react';

import { Hero } from '.';

const meta: Meta = {
  title: 'Components/Home/Hero',
  component: Hero,
  args: {
    title: 'Fresh Arrivals Online',
    description: 'Discover Our Newest Collection Today.',
    buttonLabel: 'View Collection',
    image: '/images/hero1.png',
  },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
