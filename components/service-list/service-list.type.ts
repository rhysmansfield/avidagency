import { CommonImage } from '@/types/common.type';

type ServiceListItem = {
  image: CommonImage;
  title: string;
  text: string;
  services: string[];
};

export type ServiceListProps = {
  items: ServiceListItem[];
  className?: string;
};
