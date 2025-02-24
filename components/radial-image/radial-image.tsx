import Image from 'next/image';

import { classList } from '@/utils/class-list';

import { RadialImageProps } from './radial-image.type';

import styles from './radial-image.module.scss';

export const RadialImage = ({ image }: RadialImageProps) => (
  <section className={styles.root}>
    <div className={styles['image__wrapper']}>
      <Image
        unoptimized
        {...image}
        width={2287}
        height={2426}
        className={classList(styles.image)}
      />
    </div>
  </section>
);
