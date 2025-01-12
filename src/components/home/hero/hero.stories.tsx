import { Meta, StoryObj } from '@storybook/react';

import { Hero } from '.';

const meta: Meta = {
  title: 'Components/Home/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
