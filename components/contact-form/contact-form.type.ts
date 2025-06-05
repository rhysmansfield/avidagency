import { CommonLink, CommonTheme } from '@/types/common.type';

export type ContactFormProps = {
  theme: Exclude<
    CommonTheme,
    | 'day-outline'
    | 'night-outline'
    | 'wink-accent'
    | 'azul-accent'
    | 'verde-accent'
  >;
  title: string;
  text: string;
  links?: CommonLink[];
  className?: string;
};
