import { CommonIconLink } from '@/types/common.type';

export type Url =
  | 'HOME'
  | 'SERVICES'
  | 'PROJECTS'
  | 'CONTACT'
  | 'PRIVACY_POLICY';
export type Urls = Record<Url, string>;

export type ServiceUrl = 'DESIGN' | 'BUILD';
export type ServiceUrls = Record<ServiceUrl, string>;

export type ApiUrl = 'CONTACT';
export type ApiUrls = Record<ApiUrl, string>;

export type SocialUrls = CommonIconLink[];
