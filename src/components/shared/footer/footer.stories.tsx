import { Meta, StoryObj } from '@storybook/react';

import { Footer } from '.';

const meta: Meta = {
  title: 'Components/Shared/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
