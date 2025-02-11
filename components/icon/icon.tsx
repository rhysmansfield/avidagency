import { cloneElement } from 'react';

import { LogoSvg } from '@/components/icon/svgs/logo';
import { MenuSvg } from '@/components/icon/svgs/menu';
import { ShopifySvg } from '@/components/icon/svgs/shopify';

import { IconComponents, IconProps } from './icon.type';

export const Icon = ({ name, ...props }: IconProps) => {
  const icons: IconComponents = {
    logo: <LogoSvg />,
    shopify: <ShopifySvg />,
    menu: <MenuSvg />,
  };

  return cloneElement(icons[name], props);
};
