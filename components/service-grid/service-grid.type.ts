import { CommonLink } from '@/types/common.type';

type Service = {
  title: string;
  text: string;
};

export type ServiceGridProps = {
  cta: CommonLink;
  title: string;
  text: string;
  items: [Service, Service, Service, Service, Service];
};
