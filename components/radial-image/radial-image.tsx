import Image from 'next/image';

import { classList } from '@/utils/class-list';

import { RadialImageProps } from './radial-image.type';

import styles from './radial-image.module.scss';

export const RadialImage = ({ image, className }: RadialImageProps) => (
  <section className={classList(styles.root, className)}>
    <div className={styles['image__wrapper']}>
      <Image
        unoptimized
        priority
        {...image}
        width={2287}
        height={2426}
        className={classList(styles.image)}
      />
    </div>
  </section>
);
