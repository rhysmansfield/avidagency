import Link from 'next/link';

import { Icon } from '@/components/icon/icon';
import { LoadingSpinner } from '@/components/loading-spinner/loading-spinner';

import { classList } from '@/utils/class-list';

import { ButtonProps } from './button.type';

import styles from './button.module.scss';

export const Button = ({
  theme,
  appearance = 'link',
  isLoading,
  children,
  external,
  ...props
}: ButtonProps) => {
  const commonProps: Omit<ButtonProps, 'theme' | 'appearance' | 'children'> = {
    ...props,
    className: classList(
      styles.root,
      styles[`theme-${theme}`],
      isLoading && styles['is-loading'],
      props.className,
    ),
    disabled: isLoading,
  };

  const icon = <Icon name="arrow-right" className={styles.icon} />;

  if (appearance === 'link') {
    return (
      <Link
        {...commonProps}
        href={props.href!}
        target={external ? '_blank' : undefined}
      >
        <span>
          {children}
          {icon}
        </span>
      </Link>
    );
  } else {
    return (
      <button {...commonProps}>
        {isLoading && <LoadingSpinner className={styles['loading-icon']} />}
        <span>
          {children}
          {icon}
        </span>
      </button>
    );
  }
};
