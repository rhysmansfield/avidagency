import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import { env } from 'process';

import { ReactQueryContext } from '@/context/react-query-context';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';

import { classList } from '@/utils/class-list';

import { SOCIAL_URLS, URLS } from '@/data/urls';

import { CommonLayoutProps } from '@/types/common.type';

import './global.scss';

export const metadata: Metadata = {
  title: 'Website & Digital Marketing Agency | Avid Agency',
  description:
    "Unlock your brand's full potential with our innovative marketing agency. From strategic planning to creative execution.",
  openGraph: {
    title: 'Website & Digital Marketing Agency | Avid Agency',
    description:
      "Unlock your brand's full potential with our innovative marketing agency. From strategic planning to creative execution.",
    url: 'https://avidagency.co.uk',
    images: [
      {
        url: `${env.S3_URL}/shared/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Avid Agency',
      },
    ],
    type: 'website',
  },
  metadataBase: new URL('https://avidagency.co.uk'),
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const RootLayout = ({ children }: CommonLayoutProps) => {
  return (
    <ReactQueryContext>
      <ReCaptchaProvider reCaptchaKey={env.RECAPTCHA_PUBLIC_KEY}>
        <GoogleTagManager gtmId="GTM-PSPRMMW8" />
        <html
          lang="en"
          className={classList(spaceGrotesk.variable, dmSans.variable)}
        >
          <body className={dmSans.className}>
            <Header
              items={[
                { label: 'Services', href: URLS.SERVICES },
                { label: 'Projects', href: URLS.PROJECTS },
              ]}
              cta={{
                label: "Let's talk",
                href: URLS.CONTACT,
              }}
              socials={SOCIAL_URLS}
            />
            <main>{children}</main>
            <Footer
              formHeading="Join our newsletter to stay up to date on features and releases."
              menus={[
                {
                  title: 'Sitemap',
                  items: [
                    {
                      label: 'Home',
                      href: URLS.HOME,
                    },
                    {
                      label: 'Services',
                      href: URLS.SERVICES,
                    },
                    {
                      label: 'Projects',
                      href: URLS.PROJECTS,
                    },
                    {
                      label: 'Contact',
                      href: URLS.CONTACT,
                    },
                  ],
                },
                {
                  title: 'Follow us',
                  items: SOCIAL_URLS,
                },
              ]}
            />
          </body>
        </html>
      </ReCaptchaProvider>
    </ReactQueryContext>
  );
};

export default RootLayout;
