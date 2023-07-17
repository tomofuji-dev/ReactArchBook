import { Meta, StoryObj } from '@storybook/react';

import {
  InputField,
  InputFieldProps,
} from './input-field';

const meta: Meta = {
  title: 'Components/InputField',
  component: InputField,
};
export default meta;

type Story = StoryObj<InputFieldProps>;
export const Default: Story = {
  args: {
    label: 'Name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Name',
    error: {
      type: 'required',
      message: 'Name is required!',
    },
  },
};
