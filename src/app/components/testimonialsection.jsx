"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Lucky Yasini",
    role: "Biker",
    feedback:
      "Working with Tmucheki Investments has been an amazing experience. Their team is professional, fast, and delivered high-quality signage for my business.",
    img: "/avatar1.jpg",
  },
  {
    name: "Sarah Chikonde",
    role: "Entrepreneur",
    feedback:
      "I loved their printing services! The branding materials were top-notch and really helped my company stand out.",
    img: "/avatar2.jpg",
  },
  {
    name: "John Mutsvairo",
    role: "Logistics Manager",
    feedback:
      "Their truck logistics service is very reliable. Always on time, safe, and efficient. Highly recommended!",
    img: "/avatar3.jpg",
  },
];

export default function TestimonialsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-gray-950 -z-10"></div>

      {/* Heading */}
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14"
      >
        Client{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Testimonials
        </span>
      </motion.h2>

      {/* Slider */}
      <div className="max-w-3xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-lg"
            >
              {/* Stars */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-300 italic leading-relaxed mb-8 text-center">
                "{t.feedback}"
              </p>

              {/* Client info */}
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500 mb-3"
                />
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-blue-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
