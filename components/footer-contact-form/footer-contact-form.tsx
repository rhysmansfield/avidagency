'use client';

import Image from 'next/image';

import { useContactForm } from '@/hooks/forms';

import { Button } from '@/components/button/button';
import { InputField } from '@/components/form/input-field/input-field';
import { MultiSelectField } from '@/components/form/multiselect-field/multiselect-field';

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
  const { ref, control, onSubmit, fieldErrors, isPending, isError, isSuccess } =
    useContactForm();

  return (
    <section
      ref={ref}
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
        <form onSubmit={onSubmit} className={styles.form}>
          <InputField
            control={control}
            label="Name"
            type="text"
            name="name"
            placeholder="Full name"
            rules={{
              required: 'Please enter your full name',
            }}
            error={fieldErrors.name}
            className={styles['form__input']}
          />

          <InputField
            control={control}
            label="Email"
            type="email"
            name="email"
            placeholder="email@yourdomain.com"
            rules={{
              required: 'Please enter a valid email address',
              pattern: {
                value: REGEX_EMAIL_VALIDATION,
                message: 'Please enter a valid email address',
              },
            }}
            error={fieldErrors.email}
            className={styles['form__input']}
          />

          <MultiSelectField
            control={control}
            label="Services"
            name="services"
            options={[
              { value: 'Ecommerce', label: 'Ecommerce' },
              { value: 'Website', label: 'Website' },
              { value: 'Shopify', label: 'Shopify' },
              { value: 'Marketing', label: 'Marketing' },
              { value: 'SEO', label: 'SEO' },
              { value: 'PCC', label: 'PPC ' },
              { value: 'Email marketing', label: 'Email marketing' },
              { value: 'Other', label: 'Other' },
            ]}
            rules={{
              required: 'Please select at least one service',
            }}
            error={fieldErrors.services}
            className={styles['form__input']}
          />

          <div>
            <Button
              appearance="button"
              theme={theme}
              type="submit"
              className={styles.button}
            >
              Get in touch
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
