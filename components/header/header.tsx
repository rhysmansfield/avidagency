import Link from 'next/link';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={classList('wrapper', styles.root)}>
      <div className={styles['logo__wrapper']}>
        <Icon name="logo" title="Avid Agency" className={styles.logo} />
        <div className={styles['shopify__wrapper']}>
          For everything
          <Icon name="shopify" title="Shopify" className={styles.shopify} />
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Products</Link>
          </li>
          <li>
            <Link
              href="/"
              style={{
                backgroundColor: 'pink',
                padding: '4px 12px',
                borderRadius: '9999px',
              }}
            >
              Let's talk
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
