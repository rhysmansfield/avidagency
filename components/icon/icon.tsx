import { cloneElement } from 'react';

import { InstagramSvg } from '@/components/icon//svgs/instagram';
import { PetsSvg } from '@/components/icon//svgs/pets';
import { TiktokSvg } from '@/components/icon//svgs/tiktok';
import { AlertSvg } from '@/components/icon/svgs/alert';
import { ArrowRightSvg } from '@/components/icon/svgs/arrow-right';
import { ChevronDownSvg } from '@/components/icon/svgs/chevron-down';
import { CloseSvg } from '@/components/icon/svgs/close';
import { FacebookSvg } from '@/components/icon/svgs/facebook';
import { FootasylumSvg } from '@/components/icon/svgs/footasylum';
import { HeatSvg } from '@/components/icon/svgs/heat';
import { LogoSvg } from '@/components/icon/svgs/logo';
import { LogoASvg } from '@/components/icon/svgs/logo-a';
import { LogoDSvg } from '@/components/icon/svgs/logo-d';
import { LogoISvg } from '@/components/icon/svgs/logo-i';
import { LogoVSvg } from '@/components/icon/svgs/logo-v';
import { MenuSvg } from '@/components/icon/svgs/menu';
import { MetaSvg } from '@/components/icon/svgs/meta';
import { ShopifySvg } from '@/components/icon/svgs/shopify';
import { ShopifyPartnersSvg } from '@/components/icon/svgs/shopify-partners';
import { SparkLayerSvg } from '@/components/icon/svgs/sparklayer';
import { TickSvg } from '@/components/icon/svgs/tick';

import { IconComponents, IconProps } from './icon.type';

export const Icon = ({ name, ...props }: IconProps) => {
  const icons: IconComponents = {
    logo: <LogoSvg />,
    'logo-A': <LogoASvg />,
    'logo-V': <LogoVSvg />,
    'logo-I': <LogoISvg />,
    'logo-D': <LogoDSvg />,
    shopify: <ShopifySvg />,
    menu: <MenuSvg />,
    close: <CloseSvg />,
    tick: <TickSvg />,
    alert: <AlertSvg />,
    'arrow-right': <ArrowRightSvg />,
    'chevron-down': <ChevronDownSvg />,
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
