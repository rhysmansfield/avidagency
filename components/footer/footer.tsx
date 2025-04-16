'use client';

import Link from 'next/link';

import { useNewsletterForm } from '@/hooks/forms';

import { Button } from '@/components/button/button';
import { InputField } from '@/components/form/input-field/input-field';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';
import { REGEX_EMAIL_VALIDATION } from '@/utils/patterns';

import { URLS } from '@/data/urls';

import { FooterProps } from './footer.type';

import styles from './footer.module.scss';

export const Footer = ({ formHeading, menus }: FooterProps) => {
  const { ref, control, onSubmit, fieldErrors, isPending, isError, isSuccess } =
    useNewsletterForm();

  return (
    <footer className={styles.root}>
      <div className={classList('wrapper', styles.wrapper)}>
        <div className={styles['col--left']}>
          <Link href="/" className={styles['logo__wrapper']}>
            <Icon name="logo" className={styles.logo} />
          </Link>

          <p className={styles['form__heading']}>{formHeading}</p>

          <div ref={ref} className={styles['form__wrapper']}>
            {isError && (
              <p className={styles['form__error']}>
                Something went wrong. Please try again.
              </p>
            )}
            {isSuccess && (
              <p className={styles['form__success']}>
                You have successfully subscribed to our newsletter.
              </p>
            )}

            <form onSubmit={onSubmit} className={styles.form}>
              <InputField
                control={control}
                type="email"
                name="email"
                placeholder="Enter your email"
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
              <Button
                appearance="button"
                theme="night"
                isLoading={isPending}
                type="submit"
                className={styles['form__button']}
              >
                Subscribe
              </Button>
            </form>
            <p className={styles['form__disclaimer']}>
              By subscribing you agree to our{' '}
              <Link href={URLS.PRIVACY_POLICY} target="_blank">
                privacy policy
              </Link>{' '}
              and provide consent to receive updates from us.
            </p>
          </div>
        </div>

        <div className={styles['col--right']}>
          {menus.map(({ title, items }) => (
            <div key={title} className={styles.menu}>
              <p className={styles['menu__title']}>{title}</p>
              <ul className={styles['menu__list']}>
                {items.map(({ label, href, external }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      target={external ? '_blank' : undefined}
                      className={classList(
                        'underline__wrapper',
                        styles['menu__link'],
                      )}
                    >
                      <span className="underline__text">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles['col--bottom']}>
          &copy; Avid Agency LTD. All rights reserverd.
        </div>
      </div>
    </footer>
  );
};
