import "./globals.css";
import { Encode_Sans } from "next/font/google";
import siteMetadata from "@/lib/siteMetaData";
import { Metadata } from "next";

const encodeSans = Encode_Sans({
  subsets: ["latin"],
  variable: "--font-encode",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: "/favicon.ico",
  },
  generator: "Next.js",
  applicationName: siteMetadata.title,
  referrer: "origin-when-cross-origin",
  keywords: ["Leash Pay", "Fintech", "Digital Payment"],
  authors: [{ name: "Jon Dexter", url: "https://johnkdunyo.netlify.app" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={encodeSans.className}>{children}</body>
    </html>
  );
}
