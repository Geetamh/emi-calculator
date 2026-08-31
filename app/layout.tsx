import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://emiguru.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "EMI Calculator — Home Loan, Personal Loan & Car Loan EMI",
  description:
    "Calculate your monthly EMI for home loans, personal loans and car loans instantly. See total interest, total payment and a visual break-up of your loan.",
  keywords: [
    "EMI calculator",
    "home loan EMI calculator",
    "personal loan EMI calculator",
    "car loan EMI calculator",
    "loan calculator India",
  ],
  openGraph: {
    title: "EMI Calculator — Home Loan, Personal Loan & Car Loan EMI",
    description:
      "Calculate your monthly EMI instantly, with a visual break-up of principal versus interest.",
    url: siteUrl,
    siteName: "EMI Guru",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9707175259009586"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <div className="site-header-inner">
            <span className="site-mark">EG</span>
            <span className="site-name">EMI Guru</span>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <span>EMI Guru — free loan calculators for Indian borrowers.</span>
            <Link href="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
