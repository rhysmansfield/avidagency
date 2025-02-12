'use client';

import Link from 'next/link';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

import { Icon } from '@/components/icon/icon';
import { UnderlineLink } from '@/components/underline-link/underline-link';

import { classList } from '@/utils/class-list';

import { HeaderProps } from './header.type';

import styles from './header.module.scss';

export const Header = ({ items, cta, socials }: HeaderProps) => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  return (
    <header className={classList('wrapper', styles.root)}>
      <div className={styles['logo__wrapper']}>
        <Link href="/" onClick={closeMobileMenu}>
          <Icon name="logo" title="Avid Agency" className={styles.logo} />
        </Link>
        <div className={styles['shopify__wrapper']}>
          For everything
          <Icon name="shopify" title="Shopify" className={styles.shopify} />
        </div>
      </div>

      <nav className={styles['desktop-nav']}>
        <ul className={styles['desktop-nav__list']}>
          {items.map(({ href, label, external }) => (
            <li key={label}>
              <UnderlineLink
                href={href}
                target={external ? '_blank' : undefined}
                className={styles['desktop-nav__link']}
              >
                {label}
              </UnderlineLink>
            </li>
          ))}
          <li>
            <Link
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              className={styles['desktop-nav__cta']}
            >
              {cta.label}
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles['mobile-nav__button']}>
        <Icon
          name={isMobileMenuOpen ? 'close' : 'menu'}
          title="Toggle menu"
          onClick={toggleMobileMenu}
          className={styles['mobile-nav__icon']}
        />
      </button>

      <nav
        className={classList(
          'wrapper',
          styles['mobile-nav'],
          isMobileMenuOpen && styles['mobile-nav--open'],
        )}
      >
        <ul className={styles['mobile-nav__list']}>
          {[...items, cta].map(({ href, label, external }) => (
            <li key={label}>
              <Link
                href={href}
                target={external ? '_blank' : undefined}
                onClick={closeMobileMenu}
                className={styles['mobile-nav__link']}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles['mobile-nav__socials']}>
          {socials.map(({ href, label, external, icon }) => (
            <li key={href}>
              <Link
                href={href}
                target={external ? '_blank' : undefined}
                onClick={closeMobileMenu}
                className={styles['mobile-nav__social']}
              >
                <Icon
                  name={icon}
                  title={label}
                  className={styles['mobile-nav__social__icon']}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
