'use client';

import Link from 'next/link';
import { CSSProperties } from 'react';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { URLs } from '@/data/urls';

import { HeaderProps } from './header.type';

import styles from './header.module.scss';

export const Header = ({ items, cta, socials }: HeaderProps) => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  return (
    <header className={classList('wrapper', styles.root)}>
      <div className={styles.brand}>
        <Link
          href={URLs.HOME}
          onClick={closeMobileMenu}
          className={styles['logo__wrapper']}
        >
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
              <Link
                href={href}
                target={external ? '_blank' : undefined}
                className={classList(
                  'underline__wrapper',
                  styles['desktop-nav__link'],
                )}
              >
                <span className="underline__text">{label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Button
              theme="wink"
              appearance="link"
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              className={styles['desktop-nav__cta']}
            >
              {cta.label}
            </Button>
          </li>
        </ul>
      </nav>

      <button
        className={styles['mobile-nav__button']}
        onClick={toggleMobileMenu}
      >
        <Icon
          name={isMobileMenuOpen ? 'close' : 'menu'}
          title="Toggle menu"
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
          {items.map(({ href, label, external }, index) => (
            <li key={label}>
              <Link
                href={href}
                target={external ? '_blank' : undefined}
                onClick={closeMobileMenu}
                className={classList(
                  styles['mobile-nav__animated'],
                  styles['mobile-nav__link'],
                )}
                style={
                  {
                    '--transition-index': index,
                  } as CSSProperties
                }
              >
                {label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              onClick={closeMobileMenu}
              className={classList(
                styles['mobile-nav__animated'],
                styles['mobile-nav__link'],
                styles['mobile-nav__cta'],
              )}
              style={
                {
                  '--transition-index': items.length,
                } as CSSProperties
              }
            >
              {cta.label}
              <Icon
                name="arrow-right"
                className={styles['mobile-nav__cta__icon']}
              />
            </Link>
          </li>
        </ul>

        <ul className={styles['mobile-nav__socials']}>
          {socials.map(({ href, label, external, icon }, index) => (
            <li key={href}>
              <Link
                href={href}
                target={external ? '_blank' : undefined}
                className={classList(
                  styles['mobile-nav__animated'],
                  styles['mobile-nav__social'],
                )}
                style={
                  {
                    '--transition-index': items.length + 1 + index,
                  } as CSSProperties
                }
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
