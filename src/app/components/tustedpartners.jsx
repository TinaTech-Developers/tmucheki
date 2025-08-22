"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  { name: "Partner 1", logo: "/zpc.png" },
  { name: "Partner 2", logo: "/Masimba_holdings-46.png" },
  { name: "Partner 3", logo: "/TINASOFT.jpgpartner3.png" },
  { name: "Partner 4", logo: "/Logo_The_BOC_Group.svg.png" },
  { name: "Partner 5", logo: "/partner5.png" },
  { name: "Partner 6", logo: "/partner6.png" },
  { name: "Partner 7", logo: "/partner7.png" },
  { name: "Partner 8", logo: "/partner8.png" },
];

export default function TrustedPartnersSlider() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-950 -z-10"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Trusted Partners
        </span>
      </motion.h2>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 flex items-center justify-center"
            >
              <div className="p-4 bg-white max-h-16 w-full rounded-xl flex items-center justify-center border border-blue-500/20 shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-16 w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Decorative glow behind */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
    </section>
  );
}
