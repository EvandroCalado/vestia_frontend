import { Meta, StoryObj } from '@storybook/react';

import { Menu } from '.';

const meta: Meta = {
  title: 'Components/Shared/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
