import { classList } from '@/utils/class-list';

import { ImpactTextProps } from './impact-text.type';

import styles from './impact-text.module.scss';

export const ImpactText = ({ title }: ImpactTextProps) => (
  <section className={classList('wrapper', styles.root)}>{title}</section>
);
