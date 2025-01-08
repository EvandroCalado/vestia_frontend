import { Meta, StoryObj } from '@storybook/react';

import { Search } from '.';

const meta: Meta = {
  title: 'Components/Shared/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
