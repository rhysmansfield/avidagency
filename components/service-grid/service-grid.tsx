import Link from 'next/link';

import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { ServiceGridProps } from './service-grid.type';

import styles from './service-grid.module.scss';

export const ServiceGrid = ({
  cta,
  title,
  text,
  items,
  className,
}: ServiceGridProps) => (
  <section className={classList('wrapper', styles.root, className)}>
    <div className={styles.intro}>
      <h2 className={styles['intro__title']}>{title}</h2>
      <p className={styles['intro__text']}>{text}</p>
      {cta && (
        <Button
          theme="day-outline"
          appearance="link"
          href={cta.href}
          external={cta.external}
          className={styles['intro__cta']}
        >
          {cta.label}
        </Button>
      )}
    </div>

    {items.map(({ title, text }) => {
      const children = (
        <>
          <div className={styles['item__header']}>
            <Icon name="arrow-right" className={styles['item__icon']} />
            <h3 className={styles['item__title']}>{title}</h3>
          </div>
          <p className={styles['item__text']}>{text}</p>
        </>
      );

      if (cta) {
        return (
          <Link
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            key={title}
            className={classList('underline__wrapper', styles.item)}
          >
            {children}
            <span className={classList('underline__text', styles['item__cta'])}>
              Explore more
            </span>
          </Link>
        );
      }

      return (
        <div
          key={title}
          className={classList('underline__wrapper', styles.item)}
        >
          {children}
        </div>
      );
    })}
  </section>
);
