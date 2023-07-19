import { useTheme } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

const variants = {
  link: {
    variant: 'link',
    color: 'primary',
  },
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.9',
    },
  },
  outline: {
    variant: 'outline',
    color: 'primary',
    bg: 'white',
  },
};

export type LinkProps = {
  href: string;
  children: ReactNode;
  icon?: JSX.Element;
  shallow?: boolean;
  color?: string;
};

export const Link = ({
  href,
  children,
  icon,
  shallow = false,
  color,
}: LinkProps) => {
  const theme = useTheme();
  const linkColor = color || theme.colors.primary;

  return (
    <NextLink
      shallow={shallow}
      href={href}
      passHref
      style={{ color: color }}
    >
      {icon}
      {children}
    </NextLink>
  );
};
