import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  getSiteUrl,
  SHARE_DESCRIPTION,
  SHARE_TITLE,
  SITE_NAME,
} from "@/lib/site";
import "./globals.css";

const mitr = localFont({
  src: [
    {
      path: "../public/fonts/mitr/Mitr-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/mitr/Mitr-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/mitr/Mitr-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/mitr/Mitr-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/mitr/Mitr-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/mitr/Mitr-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mitr",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SHARE_TITLE,
  description: SHARE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteUrl,
    siteName: SITE_NAME,
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={mitr.variable}>{children}</body>
    </html>
  );
}
