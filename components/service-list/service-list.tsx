import { style } from 'motion/react-client';
import Image from 'next/image';

import { classList } from '@/utils/class-list';

import { ServiceListProps } from './service-list.type';

import styles from './service-list.module.scss';

export const ServiceList = ({ items, className }: ServiceListProps) => (
  <section className={classList('wrapper', styles.root, className)}>
    {items.map(({ image, title, text, services }) => (
      <div key={title} className={styles.item}>
        <div className={styles['image__wrapper']}>
          <Image
            unoptimized
            {...image}
            width={960}
            height={540}
            className={styles.image}
          />
        </div>

        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
          <p className={styles['services__title']}>Services included:</p>
          <ul className={styles['services__list']}>
            {services.map((service, index) => (
              <li key={service} className={styles['services__item']}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
);
