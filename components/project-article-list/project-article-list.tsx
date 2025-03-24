import { classList } from '@/utils/class-list';

import { Project } from '@/data/projects.type';

import {
  ProjectArticleItem,
  ProjectArticleListProps,
} from './project-article-list.type';

import styles from './project-article-list.module.scss';

import { Button } from '../button/button';
import { ProjectArticle } from '../project-article/project-article';

const isProject = (item: ProjectArticleItem): item is Project => {
  return 'url' in item;
};

export const ProjectArticleList = ({
  title,
  items,
}: ProjectArticleListProps) => (
  <section className="wrapper">
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.items}>
      {items.map((item) =>
        isProject(item) ? (
          <ProjectArticle project={item} />
        ) : (
          <div
            className={classList(
              styles['cta__wrapper'],
              styles[`theme-${item.theme}`],
            )}
          >
            <Button
              theme={item.theme}
              href={item.href}
              target={item.external ? '_blank' : undefined}
            >
              {item.label}
            </Button>
          </div>
        ),
      )}
    </div>
  </section>
);
