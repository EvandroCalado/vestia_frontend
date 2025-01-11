import { Meta, StoryObj } from '@storybook/react';

import { SignInForm } from '.';

const meta: Meta = {
  title: 'Components/Auth/SigninForm',
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignInForm>;

export const Default: Story = {};
