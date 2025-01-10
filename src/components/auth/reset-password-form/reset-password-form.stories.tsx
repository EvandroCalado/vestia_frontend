import { Meta, StoryObj } from '@storybook/react';

import { ResetPasswordForm } from '.';

const meta: Meta = {
  title: 'Components/Auth/ResetPasswordForm',
  component: ResetPasswordForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {};
