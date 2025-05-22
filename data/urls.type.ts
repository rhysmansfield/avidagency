import { CommonIconLink } from '@/types/common.type';

export type Url =
  | 'HOME'
  | 'SERVICES'
  | 'PROJECTS'
  | 'CONTACT'
  | 'PRIVACY_POLICY'
  | 'LANDING';
export type Urls = Record<Url, string>;

export type ExternalUrl = 'CALENDLY';
export type ExternalUrls = Record<ExternalUrl, string>;

export type ApiUrl = 'CONTACT' | 'NEWSLETTER' | 'LANDING';
export type ApiUrls = Record<ApiUrl, string>;

export type SocialUrls = CommonIconLink[];
