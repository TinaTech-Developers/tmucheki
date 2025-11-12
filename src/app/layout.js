import React from "react";
import "./globals.css";
import { Geist } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "T. Mucheki Investments | Signage, Printing & Logistics",
  description:
    "T. Mucheki Investments is Zimbabwe’s trusted partner for professional signage, printing, branding, and logistics solutions. Delivering quality, innovation, and timely service.",
  keywords: [
    "Tmucheki Investments",
    "Signage Zimbabwe",
    "Printing Zimbabwe",
    "Logistics Zimbabwe",
    "Business branding Zimbabwe",
    "Custom printing Harare",
    "Fleet branding",
    "Office signage",
    "Billboards Zimbabwe",
  ],
  openGraph: {
    title: "T. Mucheki Investments | Signage, Printing & Logistics",
    description:
      "Providing expert signage, printing, and logistics solutions across Zimbabwe. Trusted by businesses for quality and innovation.",
    url: "https://tmucheki.co.zw", // change to your real domain
    siteName: "Tmucheki Investments",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "https://tmucheki.co.zw/logo.png", // place logo in /public/logo.png
        width: 1200,
        height: 630,
        alt: "Tmucheki Investments Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://tmucheki.co.zw"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="T. Mucheki Investments" />
        <link rel="canonical" href="https://tmucheki.co.zw" />
        <meta charSet="UTF-8" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "T. Mucheki Investments",
              image: "https://tmucheki.co.zw/logo.png",
              url: "https://tmucheki.co.zw",
              logo: "https://tmucheki.co.zw/logo.png",
              telephone: "+263 77 000 0000", // replace with your real number
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 79 Galloway Road",
                addressLocality: "Norton",
                addressCountry: "ZW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -17.8833, // approx Norton
                longitude: 30.7167,
              },
              sameAs: [
                "https://www.facebook.com/tmucheki",
                "https://www.linkedin.com/company/tmucheki",
              ],
              makesOffer: [
                { "@type": "Offer", name: "Signage Services" },
                { "@type": "Offer", name: "Printing Services" },
                { "@type": "Offer", name: "Transport & Logistics" },
              ],
            }),
          }}
        />
      </head>
      <body className={geist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
