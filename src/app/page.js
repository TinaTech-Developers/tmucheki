import CallToAction from "./components/calltoaction";
import HeroSection from "./components/herosection";
import PortfolioSection from "./components/portfoliosection";
import ServicesSection from "./components/services";
import TestimonialsSection from "./components/testimonialsection";
import TrustedPartners from "./components/tustedpartners";
import WhyChooseUs from "./components/whychooseus";

export default function Home() {
  return (
    <>
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
