import { Meta, StoryObj } from '@storybook/react';

import { PopUpHeader } from '.';

const meta: Meta = {
  title: 'Components/Shared/PopUpHeader',
  component: PopUpHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopUpHeader>;

export const Default: Story = {};
