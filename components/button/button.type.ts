import Link from 'next/link';
import { ComponentProps } from 'react';

import { CommonTheme, ExcludeProps } from '@/types/common.type';

type SharedButtonProps = {
  theme: CommonTheme;
};

type ButtonLinkProps = {
  appearance?: 'link';
  external?: boolean;
} & ExcludeProps<
  ComponentProps<'button'>,
  'children' | 'onClick' | 'className' | 'tabIndex'
> &
  ComponentProps<typeof Link>;

type ButtonActionProps = {
  appearance?: 'button';
  external?: never;
} & ComponentProps<'button'> &
  ExcludeProps<
    ComponentProps<typeof Link>,
    'children' | 'onClick' | 'className' | 'tabIndex'
  >;

export type ButtonProps = SharedButtonProps &
  (ButtonLinkProps | ButtonActionProps);
