import Link from 'next/link';

import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { ServiceGridProps } from './service-grid.type';

import styles from './service-grid.module.scss';

export const ServiceGrid = ({ cta, title, text, items }: ServiceGridProps) => (
  <section className={classList('wrapper', styles.root)}>
    <div className={styles.intro}>
      <h2 className={styles['intro__title']}>{title}</h2>
      <p className={styles['intro__text']}>{text}</p>
      <Button
        theme="day-outline"
        appearance="link"
        href={cta.href}
        external={cta.external}
      >
        {cta.label}
      </Button>
    </div>

    {items.map(({ title, text }) => (
      <Link
        href={cta.href}
        target={cta.external ? '_blank' : undefined}
        key={title}
        className={classList('underline__wrapper', styles.item)}
      >
        <div className={styles['item__header']}>
          <Icon name="arrow-right" className={styles['item__icon']} />
          <h2 className={styles['item__title']}>{title}</h2>
        </div>
        <p className={styles['item__text']}>{text}</p>
        <span className={classList('underline__text', styles['item__cta'])}>
          Explore more
        </span>
      </Link>
    ))}
  </section>
);
