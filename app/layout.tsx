import { poppins } from "@/fonts/poppins";

import type { Metadata } from "next";
import Script from "next/script";

import "@/styles/reset.scss";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "Website & Digital Marketing Agency | Avid Agency",
  description:
    "Unlock your brand's full potential with our innovative marketing agency. From strategic planning to creative execution.",
  openGraph: {
    title: "Website & Digital Marketing Agency | Avid Agency",
    description:
      "Unlock your brand's full potential with our innovative marketing agency. From strategic planning to creative execution.",
    url: "https://avidagency.co.uk",
    images: [
      {
        url: "https://avidagency.co.uk/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Avid Agency",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://avidagency.co.uk"),
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
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
