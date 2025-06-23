import { Button } from '@/components/button/button';
import { ProjectArticleTag } from '@/components/project-article/project-article';

import { classList } from '@/utils/class-list';

import { HeroProps } from './hero.type';

import styles from './hero.module.scss';

export const Hero = ({ title, tags, text, cta, className }: HeroProps) => (
  <section
    className={classList('wrapper', styles.root, 'space-hero', className)}
  >
    <div className={styles.left}>
      <h1 className={styles.title}>{title}</h1>
      {tags && (
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <ProjectArticleTag key={tag} label={tag} />
          ))}
        </ul>
      )}
    </div>

    <div>
      <p className={styles.text}>{text}</p>
      {cta && (
        <Button {...cta} className={styles.cta}>
          {cta.label}
        </Button>
      )}
    </div>
  </section>
);
