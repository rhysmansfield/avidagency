import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/data/projects.type';

import { ProjectArticleProps } from './project-article.type';

import styles from './project-article.module.scss';

export const ProjectArticle = ({
  project: { url, image, title, excerpt, tags },
}: ProjectArticleProps) => (
  <Link href={url} className={styles.root}>
    <article className={styles.article}>
      <Image
        unoptimized
        src={image.src}
        alt={image.alt}
        width={1280}
        height={640}
        className={styles.image}
      />
      <div className={styles['tag__wrapper']}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </article>
  </Link>
);
