import Link from 'next/link';

import { classList } from '@/utils/class-list';

import styles from './underline-link.module.scss';

export const UnderlineLink = ({
  children,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link {...props} className={classList(styles.root, props.className)}>
      <span className={styles.text}>{children}</span>
    </Link>
  );
};
