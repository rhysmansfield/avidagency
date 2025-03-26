import { Button } from '@/components/button/button';

import { classList } from '@/utils/class-list';

import { HeroProps } from './hero.type';

import styles from './hero.module.scss';

export const Hero = ({ title, text, cta }: HeroProps) => (
  <section className={classList('wrapper', styles.root)}>
    <h1 className={styles.title}>{title}</h1>
    <div>
      <p className={styles.text}>{text}</p>
      {cta && (
        <Button
          theme={cta.theme}
          href={cta.href}
          target={cta.external ? '_blank' : undefined}
          className={styles.cta}
        >
          {cta.label}
        </Button>
      )}
    </div>
  </section>
);
