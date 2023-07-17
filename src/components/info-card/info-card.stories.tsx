import { Meta, StoryObj } from '@storybook/react';

import { InfoCard, InfoCardProps } from './info-card';

const meta: Meta = {
  title: 'Components/InfoCard',
  component: InfoCard,
};

export default meta;

type Story = StoryObj<InfoCardProps>;
export const Default: Story = {
  args: {
    label: 'Full Name',
    value: 'John Doe',
  },
};

Default.args = {
  label: 'Full Name',
  value: 'John Doe',
};
