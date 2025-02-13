import { Button } from '@/components/button/button';

import { classList } from '@/utils/class-list';

import { CommonButton } from '@/types/common.type';

import styles from './hero.module.scss';

export const Hero = ({
  title,
  text,
  cta,
}: {
  title: string;
  text: string;
  cta: CommonButton;
}) => (
  <section className={classList('wrapper', styles.root)}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.content}>
      <p className={styles.text}>{text}</p>
      <Button
        theme={cta.theme}
        appearance="link"
        href={cta.href}
        target={cta.external ? '_blank' : undefined}
        className={styles.cta}
      >
        {cta.label}
      </Button>
    </div>
  </section>
);
