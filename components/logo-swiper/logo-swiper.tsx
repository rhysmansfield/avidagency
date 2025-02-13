import { Icon } from '@/components/icon/icon';
import { IconName } from '@/components/icon/icon.type';

import { classList } from '@/utils/class-list';

import styles from './logo-swiper.module.scss';

export const LogoSwiper = ({
  title,
  items,
}: {
  title: string;
  items: IconName[];
}) => (
  <section className={styles.root}>
    <p className={classList('wrapper', styles.title)}>{title}</p>
    <div className={styles.slider}>
      {items.map((icon, index) => (
        <div key={icon} className={styles.slide}>
          <Icon name={icon} title="" className={styles['slide__icon']} />
        </div>
      ))}
    </div>
  </section>
);
