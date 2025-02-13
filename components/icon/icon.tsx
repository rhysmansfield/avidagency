import { cloneElement } from 'react';

import { InstagramSvg } from '@/components/icon//svgs/instagram';
import { PetsSvg } from '@/components/icon//svgs/pets';
import { TiktokSvg } from '@/components/icon//svgs/tiktok';
import { ArrowRightSvg } from '@/components/icon/svgs/arrow-right';
import { CloseSvg } from '@/components/icon/svgs/close';
import { FacebookSvg } from '@/components/icon/svgs/facebook';
import { FootasylumSvg } from '@/components/icon/svgs/footasylum';
import { HeatSvg } from '@/components/icon/svgs/heat';
import { LogoSvg } from '@/components/icon/svgs/logo';
import { MenuSvg } from '@/components/icon/svgs/menu';
import { MetaSvg } from '@/components/icon/svgs/meta';
import { ShopifySvg } from '@/components/icon/svgs/shopify';
import { ShopifyPartnersSvg } from '@/components/icon/svgs/shopify-partners';
import { SparkLayerSvg } from '@/components/icon/svgs/sparklayer';

import { IconComponents, IconProps } from './icon.type';

export const Icon = ({ name, ...props }: IconProps) => {
  const icons: IconComponents = {
    logo: <LogoSvg />,
    shopify: <ShopifySvg />,
    menu: <MenuSvg />,
    close: <CloseSvg />,
    'arrow-right': <ArrowRightSvg />,
    facebook: <FacebookSvg />,
    instagram: <InstagramSvg />,
    tiktok: <TiktokSvg />,
    pets: <PetsSvg />,
    footasylum: <FootasylumSvg />,
    heat: <HeatSvg />,
    meta: <MetaSvg />,
    'shopify-partners': <ShopifyPartnersSvg />,
    sparklayer: <SparkLayerSvg />,
  };

  return cloneElement(icons[name], props);
};
