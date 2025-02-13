import { classList } from '@/utils/class-list';

import styles from './trusted-by.module.scss';

export const TrustedBy = () => (
  <section className={styles.root}>
    <p className={classList('wrapper', styles.title)}>Trusted by:</p>
    <div className={styles.slider}>
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={styles.slide}
          style={{
            width: '320px',
          }}
        ></div>
      ))}
    </div>
  </section>
);
