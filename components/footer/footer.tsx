'use client';

import Link from 'next/link';

import { useNewsletterForm } from '@/hooks/forms';

import { Button } from '@/components/button/button';
import { InputField } from '@/components/form/input-field/input-field';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';
import { REGEX_EMAIL_VALIDATION } from '@/utils/patterns';

import { URLs } from '@/data/urls';

import { FooterProps } from './footer.type';

import styles from './footer.module.scss';

export const Footer = ({ formHeading, menus }: FooterProps) => {
  const {
    ref,
    control,
    onSubmit,
    fieldErrors,
    data,
    apiError,
    isPending,
    isError,
    isSuccess,
  } = useNewsletterForm();

  return (
    <footer className={styles.root}>
      <div className={classList('wrapper', styles.wrapper)}>
        <div className={styles['col--left']}>
          <Icon name="logo" className={styles.logo} />
          <p className={styles['form__heading']}>{formHeading}</p>
          <form ref={ref} onSubmit={onSubmit} className={styles.form}>
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
              theme="night"
              appearance="button"
              type="submit"
              className={styles['form__button']}
            >
              Subscribe
            </Button>
          </form>
          <p className={styles['form__disclaimer']}>
            By subscribing you agree to with our{' '}
            <Link href={URLs.PRIVACY_POLICY} target="_blank">
              privacy policy
            </Link>{' '}
            and provide consent to receive updates from us.
          </p>
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
