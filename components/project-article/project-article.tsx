import Image from 'next/image';
import Link from 'next/link';

import { Icon } from '@/components/icon/icon';

import { URLS } from '@/data/urls';

import { ProjectArticleProps } from './project-article.type';

import styles from './project-article.module.scss';

export const ProjectArticleTag = ({ label }: { label: string }) => (
  <span className={styles.tag}>{label}</span>
);

export const ProjectArticle = ({
  project: { url, image, title, excerpt, tags },
}: ProjectArticleProps) => (
  <Link href={`${URLS.PROJECTS}${url}`} className={styles.root}>
    <article className={styles.article}>
      <Image
        unoptimized
        {...image}
        width={1280}
        height={640}
        className={styles.image}
      />
      <div className={styles.wrapper}>
        <div className={styles['tag__wrapper']}>
          {tags.map((tag) => (
            <ProjectArticleTag key={tag} label={tag} />
          ))}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles['excerpt__wrapper']}>
            <Icon name="arrow-right" className={styles.icon} />
            <p className={styles.excerpt}>{excerpt}</p>
            <p className={styles['view-more']}>View project</p>
          </div>
        </div>
      </div>
    </article>
  </Link>
);
