import { CommonTheme } from '@/types/common.type';

type ResultShowcaseItem = {
  url?: string;
  title: string;
  text: string;
  result: string;
};

export type ResultShowcaseProps = {
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
  items: ResultShowcaseItem[];
};
