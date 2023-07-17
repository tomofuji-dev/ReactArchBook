import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Click Me',
    icon: <PlusSquareIcon />,
  },
};
