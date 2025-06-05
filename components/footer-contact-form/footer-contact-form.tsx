'use client';

import Image from 'next/image';

import { useContactForm } from '@/hooks/forms';

import { ContactFormFields } from '@/components/contact-form-fields/contact-form-fields';

import { classList } from '@/utils/class-list';

import { FooterContactFormProps } from './footer-contact-form.type';

import styles from './footer-contact-form.module.scss';

export const FooterContactForm = ({
  theme,
  title,
  text,
  image,
  className,
}: FooterContactFormProps) => {
  const { ref, ...fieldProps } = useContactForm();

  return (
    <section className={classList('wrapper', styles.root, className)}>
      <div className={styles['image__wrapper']}>
        <Image
          unoptimized
          {...image}
          width={1280}
          height={1280}
          className={styles.image}
        />
      </div>

      <div ref={ref} className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>

        <ContactFormFields theme={theme} {...fieldProps} />
      </div>
    </section>
  );
};
