import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Link, LinkProps } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};
export default meta;

type Story = StoryObj<LinkProps>;
export const Default: Story = {
  args: {
    href: './',
    children: 'Link',
  },
};

export const WithIcon: Story = {
  args: {
    href: './',
    children: 'Link',
    icon: <PlusSquareIcon />,
  },
};
