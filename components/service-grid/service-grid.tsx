import { Button } from '@/components/button/button';

import { classList } from '@/utils/class-list';

import { ServiceGridProps } from './service-grid.type';

import styles from './service-grid.module.scss';

export const ServiceGrid = ({ items }: ServiceGridProps) => (
  <section className={classList('wrapper', styles.root)}>
    <div className={styles.intro}>
      <h2 className={styles['intro__title']}>Our services</h2>
      <p className={styles['intro__text']}>
        We offer a range of tailored services to elevate your brand's online
        presence. Everything from website development to strategic marketing.
      </p>
      <Button theme="verde" href="/services">
        View all services
      </Button>
    </div>

    {items.map(({ title, text }) => (
      <div key={title} className={styles.item}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    ))}
  </section>
);
