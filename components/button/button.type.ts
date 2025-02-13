import Link from 'next/link';
import { ComponentProps } from 'react';

import { CommonLink, ExcludeProps } from '@/types/common.type';

type SharedButtonProps = {
  theme: 'pink';
};

type ButtonLinkProps = {
  appearance: 'link';
} & ExcludeProps<
  ComponentProps<'button'>,
  'children' | 'onClick' | 'className'
> &
  ComponentProps<typeof Link>;

type ButtonActionProps = {
  appearance: 'button';
} & ComponentProps<'button'> &
  ExcludeProps<
    ComponentProps<typeof Link>,
    'children' | 'onClick' | 'className' | 'type'
  >;

export type ButtonProps = SharedButtonProps &
  (ButtonLinkProps | ButtonActionProps);
