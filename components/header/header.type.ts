import { IconName } from '@/components/icon/icon.type';

import { CommonLink } from '@/types/common.type';

export type HeaderProps = {
  items: CommonLink[];
  cta: CommonLink;
  socials: ({
    icon: IconName;
  } & CommonLink)[];
};
