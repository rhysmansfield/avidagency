import { CommonLink } from '@/types/common.type';

export type FooterProps = {
  formHeading: string;
  menus: {
    title: string;
    items: CommonLink[];
  }[];
};
