import { CommonImage, CommonTheme } from '@/types/common.type';

export type FooterContactFormProps = {
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
  image: CommonImage;
};
