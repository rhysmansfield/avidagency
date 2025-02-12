import { ApiUrls, ServiceUrls, SocialUrls, Urls } from './urls.type';

export const URLs: Urls = {
  HOME: '/',
  SERVICES: '/services',
  PROJECTS: '/projects',
  CONTACT: '/contact',
  PRIVACY_POLICY: '/privacy-policy',
};

// export const API_URLs: ApiUrls = {
//   CONTACT: '/api/contact',
// };

export const SOCIAL_URLs: SocialUrls = [
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
    label: 'Tiktok',
    href: 'https://www.tiktok.com/@avidagencyuk',
    icon: 'tiktok',
    external: true,
  },
];
