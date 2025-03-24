import { Project } from '@/data/projects.type';

import { CommonButton } from '@/types/common.type';

export type ProjectArticleListProps = {
  title: string;
  items: (Project | CommonButton)[];
};
