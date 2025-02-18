import Image from 'next/image';

import { classList } from '@/utils/class-list';

import styles from './radial-image.module.scss';

export const RadialImage = () => (
  <section className={styles.root}>
    <div className={styles['image__wrapper']}>
      <Image
        unoptimized
        src="https://i.imgur.com/jM8iws7.png"
        alt="Mockup"
        width={1286}
        height={2426}
        className={classList(styles.image, styles['image--mobile'])}
      />

      <Image
        unoptimized
        src="https://i.imgur.com/iiXzmqo.png"
        alt="Mockup"
        width={2287}
        height={2426}
        className={classList(styles.image, styles['image--desktop'])}
      />
    </div>
  </section>
);
