import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { ReCaptchaProvider } from 'next-recaptcha-v3';

import { ReactQueryContext } from '@/context/react-query-context';

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
        url: 'https://avidagency.co.uk/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Avid Agency',
      },
    ],
    type: 'website',
  },
  metadataBase: new URL('https://avidagency.co.uk'),
};

const RootLayout = ({ children }: CommonLayoutProps) => {
  return (
    <ReactQueryContext>
      <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_PUBLIC_KEY}>
        <GoogleTagManager gtmId="GTM-PSPRMMW8" />
        <html lang="en">
          <body>
            <main>{children}</main>
          </body>
        </html>
      </ReCaptchaProvider>
    </ReactQueryContext>
  );
};

export default RootLayout;
