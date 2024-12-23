import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { VercelToolbar } from "@vercel/toolbar/next";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo Vercel Feature Flags",
  description: "A demo of Vercel's feature flags",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        {children}
        <Suspense>
          <VercelToolbar />
        </Suspense>
      </body>
    </html>
  );
}
