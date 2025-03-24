import { Project } from '@/data/projects.type';

import { CommonButton } from '@/types/common.type';

export type ProjectArticleItem = Project | CommonButton;

export type ProjectArticleListProps = {
  title: string;
  items: ProjectArticleItem[];
};
