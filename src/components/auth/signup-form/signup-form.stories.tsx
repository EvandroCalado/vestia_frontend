import { Meta, StoryObj } from '@storybook/react';

import { SignUpForm } from '.';

const meta: Meta = {
  title: 'Components/Auth/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {};
