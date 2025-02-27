'use client';

import Link from 'next/link';

import { useNewsletterForm } from '@/hooks/forms';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { URLs } from '@/data/urls';

import { FooterProps } from './footer.type';

import styles from './footer.module.scss';

import { Button } from '../button/button';

export const Footer = ({ formHeading }: FooterProps) => {
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

        <div className={styles['col--right']}>Right</div>

        <div className={styles['col--bottom']}>
          &copy; Avid Agency LTD. All rights reserverd.
        </div>
      </div>
    </footer>
  );
};
