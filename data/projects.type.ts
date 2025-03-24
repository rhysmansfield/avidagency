import { ReactNode } from 'react';

import { CommonImage, CommonLink } from '@/types/common.type';

export type Project = {
  url: string;
  image: CommonImage;
  title: string;
  excerpt: string;
  description: string;
  tags: string[];
  externalUrl?: Omit<CommonLink, 'external'>;
  content: ReactNode;
};
