'use client';

import { useNewsletterForm } from '@/hooks/forms';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

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
          <form ref={ref} onSubmit={onSubmit}>
            <Button
              theme="night"
              appearance="button"
              type="submit"
              className={styles['form__button']}
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className={styles['col--right']}>Right</div>

        <div className={styles['col--bottom']}>
          &copy; Avid Agency LTD. All rights reserverd.
        </div>
      </div>
    </footer>
  );
};
