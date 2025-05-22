import { ApiUrls, ExternalUrls, SocialUrls, Urls } from './urls.type';

export const URLS: Urls = {
  HOME: '/',
  SERVICES: '/services',
  PROJECTS: '/projects',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
};

export const EXTERNAL_URLS: ExternalUrls = {
  CALENDLY: 'https://calendly.com/avidagency/30min',
};

export const API_URLS: ApiUrls = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
};

export const SOCIAL_URLS: SocialUrls = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/avidagencyuk',
    icon: 'facebook',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/avidagencyuk',
    icon: 'instagram',
    external: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@avidagencyuk',
    icon: 'tiktok',
    external: true,
  },
];
