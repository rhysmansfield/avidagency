'use client';

import Link from 'next/link';

import { Icon } from '@/components/icon/icon';
import { UnderlineLink } from '@/components/underline-link/underline-link';

import { classList } from '@/utils/class-list';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={classList('wrapper', styles.root)}>
      <div className={styles['logo__wrapper']}>
        <Link href="/">
          <Icon name="logo" title="Avid Agency" className={styles.logo} />
        </Link>
        <div className={styles['shopify__wrapper']}>
          For everything
          <Icon name="shopify" title="Shopify" className={styles.shopify} />
        </div>
      </div>

      <nav className={styles['desktop-nav']}>
        <ul className={styles['desktop-nav__list']}>
          <li>
            <UnderlineLink href="/" className={styles['desktop-nav__link']}>
              Services
            </UnderlineLink>
          </li>
          <li>
            <UnderlineLink href="/" className={styles['desktop-nav__link']}>
              Projects
            </UnderlineLink>
          </li>
          <li>
            <Link href="/" className={styles['desktop-nav__cta']}>
              Let&apos;s talk
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles['mobile-nav__button']}>
        <Icon name="menu" title="Menu" className={styles['mobile-nav__icon']} />
      </button>

      <nav className={classList('wrapper', styles['mobile-nav'])}>
        <ul className={styles['mobile-nav__list']}>
          <li>
            <Link href="/" className={styles['mobile-nav__link']}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['mobile-nav__link']}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/" className={styles['mobile-nav__link']}>
              Let&apos;s talk
            </Link>
          </li>
        </ul>

        <ul className={styles['mobile-nav__socials']}>Socials</ul>
      </nav>
    </header>
  );
};
