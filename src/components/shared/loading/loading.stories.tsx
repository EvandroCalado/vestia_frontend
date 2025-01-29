import { Meta, StoryObj } from '@storybook/react';

import { Loading } from '.';

const meta: Meta = {
  title: 'Components/Shared/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    hasText: true,
  },
};
