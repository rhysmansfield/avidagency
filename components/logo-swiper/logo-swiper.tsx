'use client';

import { useState } from 'react';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { LogoSwiperProps } from './logo-swiper.type';

import styles from './logo-swiper.module.scss';

export const LogoSwiper = ({ title, items, className }: LogoSwiperProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  return (
    <section className={classList(styles.root, className)}>
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
