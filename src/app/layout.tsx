import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "AJTT Accountants | Trusted Accountants in the UK",
    template: "%s | AJTT Accountants",
  },
  description:
    "AJTT Accountants provide professional accounting, bookkeeping, tax returns, VAT, payroll and business advisory services across the UK.",
  keywords: [
    "accountants in UK",
    "tax accountant",
    "bookkeeping services",
    "VAT returns",
    "payroll services",
    "business accounting UK",
  ],
  openGraph: {
    title: "AJTT Accountants",
    description:
      "Professional accounting and tax services for individuals and businesses in the UK.",
    url: "https://ajttaccountants.co.uk",
    siteName: "AJTT Accountants",
    type: "website",
  },
  metadataBase: new URL("https://ajttaccountants.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="accounting-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "AJTT Accountants",
              url: "https://ajttaccountants.co.uk",
              areaServed: "GB",
              serviceType: [
                "Tax Returns",
                "Bookkeeping",
                "VAT Returns",
                "Payroll",
                "Business Advisory",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
