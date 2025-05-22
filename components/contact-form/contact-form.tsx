'use client';

import { useContactForm } from '@/hooks/forms';

import { ContactFormFields } from '@/components/contact-form-fields/contact-form-fields';
import { ContactFormProps } from '@/components/contact-form/contact-form.type';

import { classList } from '@/utils/class-list';

import styles from './contact-form.module.scss';

export const ContactForm = ({ theme, title, text }: ContactFormProps) => {
  const { ref, ...fieldProps } = useContactForm();

  return (
    <section className={classList('wrapper', styles.root)}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div ref={ref} className={styles['form__wrapper']}>
        <ContactFormFields theme={theme} {...fieldProps} />
      </div>
    </section>
  );
};
