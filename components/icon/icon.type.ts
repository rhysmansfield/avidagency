import { HTMLAttributes, ReactElement } from 'react';

export type IconName =
  | 'logo'
  | 'logo-A'
  | 'logo-V'
  | 'logo-I'
  | 'logo-D'
  | 'shopify'
  | 'menu'
  | 'close'
  | 'tick'
  | 'alert'
  | 'arrow-right'
  | 'chevron-down'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'pets'
  | 'footasylum'
  | 'heat'
  | 'meta'
  | 'shopify-partners'
  | 'sparklayer';

export type IconComponents = {
  [key in IconName]: ReactElement;
};

export type IconProps = HTMLAttributes<SVGElement> & {
  name: IconName;
};
