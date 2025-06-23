import Link from 'next/link';

import { Button } from '@/components/button/button';
import { ProjectArticle } from '@/components/project-article/project-article';

import { classList } from '@/utils/class-list';

import { PROJECTS } from '@/data/projects';
import { Project } from '@/data/projects.type';
import { URLS } from '@/data/urls';

import {
  ProjectArticleItem,
  ProjectArticleListProps,
} from './project-article-list.type';

import styles from './project-article-list.module.scss';

const isProject = (item: ProjectArticleItem): item is Project => {
  return 'url' in item;
};

export const ProjectArticleList = ({
  title,
  items,
  className,
}: ProjectArticleListProps) => (
  <section className={classList('wrapper', className)}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.items}>
      {items.map((item) =>
        isProject(item) ? (
          <ProjectArticle key={item.title} project={item} />
        ) : (
          <Link
            key={item.label}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            className={classList(
              styles['cta__wrapper'],
              styles[`theme-${item.theme}`],
            )}
          >
            <Button
              tabIndex={-1}
              appearance="button"
              theme={item.theme}
              className={styles.cta}
            >
              {item.label}
            </Button>
          </Link>
        ),
      )}
    </div>
  </section>
);

export const SharedArticleList = ({
  className,
}: Pick<ProjectArticleListProps, 'className'>) => {
  return (
    <ProjectArticleList
      title="Some of our recent projects"
      items={[
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 1`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 2`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 3`,
        },
        {
          ...PROJECTS[0],
          title: `${PROJECTS[0].title} 4`,
        },
        {
          theme: 'azul',
          href: URLS.PROJECTS,
          label: 'View all projects',
        },
      ]}
      className={className}
    />
  );
};
