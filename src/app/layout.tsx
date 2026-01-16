import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


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
    default: "AJT&T Accountants | Trusted Accountants in the UK",
    template: "%s | AJT&T Accountants",
  },
  description:
    "AJT&T Accountants provide professional accounting, bookkeeping, tax returns, VAT, payroll and business advisory services across the UK.",
  keywords: [
    "accountants in UK",
    "tax accountant",
    "bookkeeping services",
    "VAT returns",
    "payroll services",
    "business accounting UK",
  ],
  openGraph: {
    title: "AJT&T Accountants",
    description:
      "Professional accounting and tax services for individuals and businesses in the UK.",
    url: "https://ajttaccountants.co.uk",
    siteName: "AJT&T Accountants",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          id="accounting-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "AJT&T Accountants",
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
