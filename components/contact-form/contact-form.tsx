'use client';

import { link } from 'fs';
import Link from 'next/link';

import { useContactForm } from '@/hooks/forms';

import { ContactFormFields } from '@/components/contact-form-fields/contact-form-fields';
import { ContactFormProps } from '@/components/contact-form/contact-form.type';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import styles from './contact-form.module.scss';

export const ContactForm = ({
  theme,
  title,
  text,
  links,
}: ContactFormProps) => {
  const { ref, ...fieldProps } = useContactForm();

  return (
    <section className={classList('wrapper', styles.root)}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>

        {!!links?.length && (
          <div className={styles.links}>
            {links.map(({ href, label, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                className={classList('underline__wrapper', styles.link)}
              >
                <span className="underline__text">{label}</span>
                <Icon name="arrow-right" />
              </Link>
            ))}
          </div>
        )}
      </div>
      <div ref={ref} className={styles['form__wrapper']}>
        <ContactFormFields theme={theme} {...fieldProps} />
      </div>
    </section>
  );
};
