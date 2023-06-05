import "./globals.css";
import { Inter } from "next/font/google";
import siteMetadata from "@/lib/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
