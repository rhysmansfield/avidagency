import { cloneElement } from 'react';

import { ArrowRightSvg } from '@/components/icon/svgs/arrow-right';
import { CloseSvg } from '@/components/icon/svgs/close';
import { LogoSvg } from '@/components/icon/svgs/logo';
import { MenuSvg } from '@/components/icon/svgs/menu';
import { ShopifySvg } from '@/components/icon/svgs/shopify';

import { IconComponents, IconProps } from './icon.type';

export const Icon = ({ name, ...props }: IconProps) => {
  const icons: IconComponents = {
    logo: <LogoSvg />,
    shopify: <ShopifySvg />,
    menu: <MenuSvg />,
    close: <CloseSvg />,
    'arrow-right': <ArrowRightSvg />,
  };

  return cloneElement(icons[name], props);
};
