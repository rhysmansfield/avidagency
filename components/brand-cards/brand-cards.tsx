import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { BrandCardKey, BrandCardProps } from './brand-cards.type';

import styles from './brand-cards.module.scss';

export const BrandCards = ({
  title,
  text,
  items,
  className,
}: BrandCardProps) => {
  const getCardTheme = (key: BrandCardKey) => {
    switch (key) {
      case 'A':
        return styles['card--verde'];
      case 'V':
        return styles['card--azul'];
      case 'I':
        return styles['card--wink'];
      case 'D':
        return styles['card--day'];
    }
  };

  return (
    <section className={classList('wrapper', className)}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>

      <div className={styles['card__wrapper']}>
        {items.map(({ key, title, text }) => (
          <div key={key} className={classList(styles.card, getCardTheme(key))}>
            <div className={styles['card__header']}>
              <Icon name="logo" className={styles['card__icon']} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
