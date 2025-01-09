import { Meta, StoryObj } from '@storybook/react';

import { ForgotPasswordForm } from '.';

const meta: Meta = {
  title: 'Components/Auth/ForgotPasswordForm',
  component: ForgotPasswordForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {};
