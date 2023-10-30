import type { Metadata } from "next";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Header } from "@app/components/header/header";

import { poppins } from "@app/fonts/poppins";
import "@app/styles/reset.scss";
import "@app/styles/global.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Avid Media | Amplify, Visualise, Innovate, Deliver",
  description:
    "Avid Media is a digital agency based in Lancashire, UK. We specialise in creating bespoke digital solutions for small businesses.",
  openGraph: {
    title: "Avid Media | Amplify, Visualise, Innovate, Deliver",
    description:
      "Avid Media is a digital agency based in Lancashire, UK. We specialise in creating bespoke digital solutions for small businesses.",
    url: "https://avidmedia.io",
    images: [
      {
        url: "https://avidmedia.io/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Avid Media",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://avidmedia.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PSPRMMW8');
        `}
        </Script>
      </head>
      <ReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_PUBLIC_KEY}>
        <body className={poppins.className}>
          <Header />
          {children}
        </body>
      </ReCaptchaProvider>
    </html>
  );
}
