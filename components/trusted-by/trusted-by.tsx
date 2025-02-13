import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import styles from './trusted-by.module.scss';

export const TrustedBy = () => (
  <section className={styles.root}>
    <p className={classList('wrapper', styles.title)}>Trusted by:</p>
    <div className={styles.slider}>
      <div className={styles.slide}>
        <Icon name="pets" className={styles['slide__icon']} />
      </div>
      <div className={styles.slide}>
        <Icon name="footasylum" className={styles['slide__icon']} />
      </div>
      <div className={styles.slide}>
        <Icon name="heat" className={styles['slide__icon']} />
      </div>
      <div className={styles.slide}>
        <Icon name="meta" className={styles['slide__icon']} />
      </div>
      <div className={styles.slide}>
        <Icon name="shopify-partners" className={styles['slide__icon']} />
      </div>
      <div className={styles.slide}>
        <Icon name="sparklayer" className={styles['slide__icon']} />
      </div>
    </div>
  </section>
);
