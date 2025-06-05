'use client';

import { get } from 'http';
import { AnimatePresence, Variants, motion } from 'motion/react';
import Link from 'next/link';
import { CSSProperties } from 'react';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

import { Button } from '@/components/button/button';
import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { transition } from '@/data/transition';
import { URLS } from '@/data/urls';

import { HeaderProps } from './header.type';

import styles from './header.module.scss';

export const Header = ({ items, cta, socials }: HeaderProps) => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useMobileMenu();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const getTranisitionDelay = (index: number): number => {
    return transition.duration + index * transition.duration * 0.75;
  };

  return (
    <header className={classList('wrapper', styles.root)}>
      <div className={styles.brand}>
        <Link
          href={URLS.HOME}
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
          {!!items?.length &&
            items.map(({ href, label, external }) => (
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
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              className={styles['desktop-nav__cta']}
            >
              {cta.label}
            </Button>
          </li>
        </ul>
      </nav>

      <motion.button
        className={styles['mobile-nav__button']}
        onTap={toggleMobileMenu}
      >
        <Icon
          name={isMobileMenuOpen ? 'close' : 'menu'}
          title="Toggle menu"
          className={styles['mobile-nav__icon']}
        />
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className={classList(
              'wrapper',
              styles['mobile-nav'],
              isMobileMenuOpen && styles['mobile-nav--open'],
            )}
          >
            <motion.ul className={styles['mobile-nav__list']}>
              {!!items?.length &&
                items.map(({ href, label, external }, index) => (
                  <motion.li
                    key={label}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    transition={{
                      ...transition,
                      delay: getTranisitionDelay(index),
                    }}
                  >
                    <Link
                      href={href}
                      target={external ? '_blank' : undefined}
                      onClick={closeMobileMenu}
                      className={styles['mobile-nav__link']}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}

              <motion.li
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{
                  ...transition,
                  delay: getTranisitionDelay(items?.length || 0),
                }}
              >
                <Link
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  onClick={closeMobileMenu}
                  className={classList(
                    styles['mobile-nav__link'],
                    styles['mobile-nav__cta'],
                  )}
                >
                  {cta.label}
                  <Icon
                    name="arrow-right"
                    className={styles['mobile-nav__cta__icon']}
                  />
                </Link>
              </motion.li>
            </motion.ul>

            <ul className={styles['mobile-nav__socials']}>
              {socials.map(({ href, label, external, icon }, index) => (
                <motion.li
                  key={label}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{
                    ...transition,
                    delay: getTranisitionDelay(
                      (items?.length || 0) + index + 1,
                    ),
                  }}
                >
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    className={styles['mobile-nav__social']}
                  >
                    <Icon
                      name={icon}
                      title={label}
                      className={styles['mobile-nav__social__icon']}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
