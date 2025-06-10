import Image from 'next/image';

import { classList } from '@/utils/class-list';

import { FullWidthImageProps } from './full-width-image.type';

import styles from './full-width-image.module.scss';

export const FullWidthImage = ({ image, className }: FullWidthImageProps) => (
  <section className={classList('wrapper', styles.root, className)}>
    <div className={styles['image__wrapper']}>
      <Image
        unoptimized
        {...image}
        width={1920}
        height={1080}
        className={styles.image}
      />
    </div>
  </section>
);
