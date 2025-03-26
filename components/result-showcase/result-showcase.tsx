import { classList } from '@/utils/class-list';

import { ResultShowcaseProps } from './result-showcase.type';

import styles from './result-showcase.module.scss';

export const ResultShowcase = ({ title, text, items }: ResultShowcaseProps) => (
  <section className={styles.root}>
    <div className={classList('wrapper', styles.wrapper)}>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>

      <div>
        {items.map(({ title, text, result }) => (
          <div key={title} className={styles.item}>
            <div>
              <h3 className={styles['item__title']}>{title}</h3>
              <p className={styles['item__text']}>{text}</p>
            </div>
            <p className={styles['item__percentage']}>{result}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
