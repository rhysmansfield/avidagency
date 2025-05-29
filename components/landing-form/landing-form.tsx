'use client';

import parsePhoneNumberFromString from 'libphonenumber-js';
import Link from 'next/link';

import { useLandingForm } from '@/hooks/forms';

import { Button } from '@/components/button/button';
import { InputField } from '@/components/form/input-field/input-field';
import { Icon } from '@/components/icon/icon';
import { LandingFormProps } from '@/components/landing-form/landing-form.type';

import { classList } from '@/utils/class-list';
import {
  REGEX_EMAIL_VALIDATION,
  REGEX_MOBILE_VALIDATION,
  REGEX_NAME_VALIDATION,
} from '@/utils/patterns';

import styles from './landing-form.module.scss';

export const LandingForm = ({
  theme,
  title,
  text,
  links,
}: LandingFormProps) => {
  const { ref, control, onSubmit, fieldErrors, isPending, isError, isSuccess } =
    useLandingForm();

  return (
    <section className={classList('wrapper', styles.root)}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
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
        {isSuccess && (
          <p className={styles['form__success']}>
            <Icon name="tick" />
            We have received your message & will be in touch shortly.
          </p>
        )}

        {isError && (
          <p className={styles['form__error']}>
            <Icon name="alert" />
            Something went wrong. Please try again.
          </p>
        )}

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
          />

          <InputField
            control={control}
            label="Phone"
            type="text"
            name="phoneNumber"
            placeholder="+447123 456789"
            rules={{
              required: 'Please enter a valid phone number',
              pattern: {
                value: REGEX_MOBILE_VALIDATION,
                message: 'Please enter a valid phone number',
              },
              validate: (value) => {
                const parsed = parsePhoneNumberFromString(value, 'GB');
                if (parsed && parsed.isValid()) {
                  return true;
                }

                return 'Please enter a valid phone number';
              },
            }}
            error={fieldErrors.phoneNumber}
          />

          <InputField
            control={control}
            label="Website"
            type="text"
            name="website"
            placeholder="https://yourdomain.com"
            rules={{
              required: "Please enter your website's url",
            }}
            error={fieldErrors.website}
          />

          <div>
            <Button
              appearance="button"
              isLoading={isPending}
              theme={theme}
              type="submit"
              className={styles.button}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
