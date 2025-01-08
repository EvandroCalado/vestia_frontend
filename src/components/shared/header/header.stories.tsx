import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta = {
  title: 'Components/Shared/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
