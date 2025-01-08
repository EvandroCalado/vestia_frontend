import { Meta, StoryObj } from '@storybook/react';

import { Logo } from './logo';

const meta: Meta = {
  title: 'Components/shared/logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
