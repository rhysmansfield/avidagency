import { CommonButton } from '@/types/common.type';

export type HeroProps = {
  title: string;
  tags?: string[];
  text: string;
  cta?: CommonButton;
  className?: string;
};
