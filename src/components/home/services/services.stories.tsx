import { Meta, StoryObj } from '@storybook/react';

import { Services } from '.';

const meta: Meta = {
  title: 'Components/Home/Services',
  component: Services,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Services>;

export const Default: Story = {};
