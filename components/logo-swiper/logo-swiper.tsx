'use client';

import { useState } from 'react';

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
}) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  return (
    <section className={styles.root}>
      <p className={classList('wrapper', styles.title)}>{title}</p>
      <div
        className={classList(
          styles.slider,
          isAnimating && styles['slider--animating'],
        )}
        onAnimationEnd={() => {
          setIsAnimating(false);
        }}
      >
        {items.map((icon, index) => (
          <div key={icon} className={styles.slide}>
            <Icon name={icon} title="" className={styles['slide__icon']} />
          </div>
        ))}
      </div>
    </section>
  );
};
