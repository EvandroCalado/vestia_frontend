import { Meta, StoryObj } from '@storybook/react';

import { FeaturedAndLatest } from '.';

const meta: Meta = {
  title: 'Components/Home/FeaturedAndLatest',
  component: FeaturedAndLatest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FeaturedAndLatest>;

export const Default: Story = {};
