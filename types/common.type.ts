import { ReactNode } from 'react';

import { ButtonProps } from '@/components/button/button.type';
import { IconName } from '@/components/icon/icon.type';

export type ExcludeProps<T, Ignore = never> = {
  [K in keyof T]?: K extends Ignore ? T[K] : never;
};

export type CommonLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CommonIconLink = CommonLink & { icon: IconName };

export type CommonButton = CommonLink & Pick<ButtonProps, 'theme'>;

export type CommonImage = {
  src: string;
  alt: string;
};

type PageParams = {
  slug: string;
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type CommonPageProps = Readonly<{
  params: PageParams;
  searchParams?: SearchParams;
}>;

export type CommonLayoutProps = Readonly<{
  children: ReactNode;
}>;
