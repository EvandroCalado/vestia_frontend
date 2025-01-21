import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from '.';

const meta: Meta = {
  title: 'Components/Shared/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/cart',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {};
