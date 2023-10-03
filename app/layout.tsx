import { Header } from "@app/components/header/header";

import type { Metadata } from "next";

import { poppins } from "@app/fonts/poppins";
import "@app/styles/reset.scss";
import "@app/styles/global.scss";

export const metadata: Metadata = {
  title: "Avid Media | Amplify, Visualise, Innovate, Deliver",
  description:
    "Avid Media is a digital agency based in Lancashire, UK. We specialise in creating bespoke digital solutions for small businesses.",
  openGraph: {
    title: "Avid Media | Amplify, Visualise, Innovate, Deliver",
    description:
      "Avid Media is a digital agency based in Lancashire, UK. We specialise in creating bespoke digital solutions for small businesses.",
    url: "https://avidmedia.co.uk",
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
        {children}
      </body>
    </html>
  );
}
