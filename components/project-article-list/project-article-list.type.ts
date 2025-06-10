import { Project } from '@/data/projects.type';

import { CommonButton, CommonTheme } from '@/types/common.type';

export type ProjectArticleItem =
  | Project
  | (CommonButton & {
      theme: Exclude<
        CommonTheme,
        'wink-accent' | 'azul-accent' | 'verde-accent'
      >;
    });

export type ProjectArticleListProps = {
  title?: string;
  items: ProjectArticleItem[];
  className?: string;
};
