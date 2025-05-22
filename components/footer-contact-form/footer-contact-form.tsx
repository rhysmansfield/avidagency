'use client';

import Image from 'next/image';

import { useContactForm } from '@/hooks/forms';

import { Button } from '@/components/button/button';
import { ContactFormFields } from '@/components/contact-form-fields/contact-form-fields';
import { InputField } from '@/components/form/input-field/input-field';
import { MultiSelectField } from '@/components/form/multiselect-field/multiselect-field';
import { TextareaField } from '@/components/form/textarea-field/textarea-field';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';
import { REGEX_EMAIL_VALIDATION } from '@/utils/patterns';

import { FooterContactFormProps } from './footer-contact-form.type';

import styles from './footer-contact-form.module.scss';

export const FooterContactForm = ({
  theme,
  title,
  text,
  image,
}: FooterContactFormProps) => {
  const { ref, ...fieldProps } = useContactForm();

  return (
    <section className={classList('wrapper', styles.root)}>
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
