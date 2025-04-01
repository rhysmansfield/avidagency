import Image from 'next/image';

import { Button } from '@/components/button/button';

import { classList } from '@/utils/class-list';

import { FooterContactFormProps } from './footer-contact-form.type';

import styles from './footer-contact-form.module.scss';

export const FooterContactForm = ({
  theme,
  title,
  text,
  image,
}: FooterContactFormProps) => {
  return (
    <section
      className={classList('wrapper', styles.root, styles[`theme-${theme}`])}
    >
      <div className={styles['image__wrapper']}>
        <Image
          unoptimized
          {...image}
          width={1280}
          height={1280}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <form className={styles.form}>
          <Button appearance="button" theme={theme} type="submit">
            Get in touch
          </Button>
        </form>
      </div>
    </section>
  );
};
