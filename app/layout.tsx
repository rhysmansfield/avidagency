import { Header } from "@/components/header/header";
import { poppins } from "@/fonts/poppins";

import type { Metadata } from "next";

import "@/styles/reset.scss";
import "@/styles/global.scss";

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
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
