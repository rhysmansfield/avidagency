import { ProjectArticleListProps } from './project-article-list.type';

export const ProjectArticleList = ({
  title,
  items,
}: ProjectArticleListProps) => (
  <section>
    <h2>{title}</h2>
  </section>
);
