import Link from 'next/link';
import { ComponentProps } from 'react';

import { classList } from '@/utils/class-list';

import styles from './underline-link.module.scss';

export const UnderlineLink = ({
  children,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <Link {...props} className={classList(styles.root, props.className)}>
      <span className={styles.text}>{children}</span>
    </Link>
  );
};
