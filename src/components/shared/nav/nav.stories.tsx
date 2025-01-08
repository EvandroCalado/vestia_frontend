import { Meta, StoryObj } from '@storybook/react';

import { Nav } from '.';

const meta: Meta = {
  title: 'Components/Shared/Nav',
  component: Nav,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {};
