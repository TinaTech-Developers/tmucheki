"use client";

import CallToAction from "./components/calltoaction";
import HeroSection from "./components/herosection";
import PortfolioSection from "./components/portfoliosection";
import ServicesSection from "./components/services";
import TestimonialsSection from "./components/testimonialsection";
import TrustedPartners from "./components/tustedpartners";
import WhyChooseUs from "./components/whychooseus";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* ✅ SEO + Structured Data for Client Page */}
      <Head>
        <title>
          Tmucheki Investments | Printing, Signage & Logistics in Zimbabwe
        </title>
        <meta
          name="description"
          content="Tmucheki Investments is Zimbabwe’s trusted provider of professional printing, signage, and logistics services. We help brands stand out with innovative and timely solutions."
        />
        <meta
          name="keywords"
          content="Tmucheki Investments, printing services Zimbabwe, signage Zimbabwe, logistics Zimbabwe, vehicle branding, digital printing, corporate signage, custom signs, branding Zimbabwe"
        />
        <meta name="author" content="Tmucheki Investments" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tmucheki.co.zw" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Tmucheki Investments | Printing, Signage & Logistics in Zimbabwe"
        />
        <meta
          property="og:description"
          content="Reliable signage, printing, and logistics company in Zimbabwe helping businesses grow through creativity, quality, and timely delivery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmucheki.co.zw" />
        <meta
          property="og:image"
          content="https://www.tmucheki.co.zw/images/og-home.jpg"
        />
        <meta property="og:site_name" content="Tmucheki Investments" />
        <meta property="og:locale" content="en_ZW" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tmucheki Investments | Printing, Signage & Logistics"
        />
        <meta
          name="twitter:description"
          content="Zimbabwe’s trusted partner for signage, printing, and logistics solutions. We bring your ideas to life."
        />
        <meta
          name="twitter:image"
          content="https://www.tmucheki.co.zw/images/og-home.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tmucheki Investments",
              url: "https://www.tmucheki.co.zw",
              logo: "https://www.tmucheki.co.zw/images/logo.png",
              description:
                "Tmucheki Investments is a professional printing, signage, and logistics company in Zimbabwe.",
              sameAs: [
                "https://facebook.com/tmuchekiinvestments",
                "https://linkedin.com/company/tmuchekiinvestments",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+263 777 349 7946",
                contactType: "Customer Service",
                areaServed: "ZW",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </Head>

      {/* ✅ Page Sections */}
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TrustedPartners />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
