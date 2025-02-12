import Link from 'next/link';

import { Icon } from '@/components/icon/icon';

import { classList } from '@/utils/class-list';

import { ButtonProps } from './button.type';

import styles from './button.module.scss';

export const Button = ({
  theme,
  appearance = 'link',
  children,
  ...props
}: ButtonProps) => {
  const commonProps: Omit<ButtonProps, 'theme' | 'appearance' | 'children'> = {
    ...props,
    className: classList(
      styles.root,
      styles[`theme-${theme}`],
      props.className,
    ),
  };

  const icon = <Icon name="arrow-right" className={styles.icon} />;

  if (appearance === 'link') {
    return (
      <Link {...commonProps} href={props.href!}>
        {children}
        {icon}
      </Link>
    );
  } else {
    return (
      <button {...commonProps}>
        {children}
        {icon}
      </button>
    );
  }
};
