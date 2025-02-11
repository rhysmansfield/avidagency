import { HTMLAttributes, ReactElement } from 'react';

export type IconName = 'logo' | 'shopify' | 'menu';

export type IconComponents = {
  [key in IconName]: ReactElement;
};

export type IconProps = HTMLAttributes<SVGElement> & {
  name: IconName;
};
