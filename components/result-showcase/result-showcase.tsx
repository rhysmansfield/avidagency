import Link from 'next/link';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { ResultShowcaseProps } from './result-showcase.type';

import styles from './result-showcase.module.scss';

export const ResultShowcase = ({
  theme,
  title,
  text,
  items,
}: ResultShowcaseProps) => (
  <section className={classList(styles.root, styles[`theme-${theme}`])}>
    <div className={classList('wrapper', styles.wrapper)}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>

      <div>
        {items.map(({ url, title, text, result }) => {
          const children = (
            <>
              <div>
                <h3 className={styles['item__title']}>{title}</h3>
                <div className={styles['item__excerpt-wrapper']}>
                  <Icon name="arrow-right" className={styles['item__icon']} />
                  <p className={styles['item__excerpt']}>{text}</p>
                  <p className={styles['item__view-more']}>View project</p>
                </div>
              </div>
              <p className={styles['item__percentage']}>{result}</p>
            </>
          );

          if (url) {
            return (
              <Link href={url} key={`${title}-${text}`} className={styles.item}>
                {children}
              </Link>
            );
          }

          return (
            <div key={`${title}-${text}`} className={styles.item}>
              {children}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
