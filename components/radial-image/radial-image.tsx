import Image from 'next/image';

import { classList } from '@/utils/class-list';

import { RadialImageProps } from './radial-image.type';

import styles from './radial-image.module.scss';

export const RadialImage = ({
  images: { mobile, desktop },
}: RadialImageProps) => (
  <section className={styles.root}>
    <div className={styles['image__wrapper']}>
      <Image
        unoptimized
        {...mobile}
        width={1286}
        height={2426}
        className={classList(styles.image, styles['image--mobile'])}
      />

      <Image
        unoptimized
        {...desktop}
        width={2287}
        height={2426}
        className={classList(styles.image, styles['image--desktop'])}
      />
    </div>
  </section>
);
