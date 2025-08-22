"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { ShieldCheck, ThumbsUp, Clock, Globe } from "lucide-react";
import TestimonialsSlider from "@/app/components/testimonialsection";

const serviceCategories = [
  {
    category: "Transport & Logistics",
    description:
      "Efficient and reliable transport solutions for your business. Timely deliveries, fleet tracking, and cross-border shipping.",
    services: [
      { name: "Truck Delivery", img: "/logistics/logistics1.jpeg" },
      { name: "Warehouse Management", img: "/logistics/logistics2.jpeg" },
      { name: "Cross-border Shipping", img: "/logistics/logistics3.jpeg" },
      { name: "Fleet Tracking", img: "/logistics/gps-truck.jpg" },
    ],
    gradient: "from-green-400 to-teal-500",
  },
];

// ----- Why Choose Us Points -----
const points = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: "Unmatched Reliability",
    desc: "Our commitment ensures your projects are always delivered on time.",
  },
  {
    icon: <ThumbsUp className="w-7 h-7 text-blue-400" />,
    title: "Proven Expertise",
    desc: "A team with years of experience in printing, signage, and logistics.",
  },
  {
    icon: <Clock className="w-7 h-7 text-blue-400" />,
    title: "Fast Turnaround",
    desc: "We respect deadlines and keep your business moving efficiently.",
  },
  {
    icon: <Globe className="w-7 h-7 text-blue-400" />,
    title: "Global Reach",
    desc: "Logistics solutions that connect you across borders seamlessly.",
  },
];

// ----- Main Component -----
export default function ServicesPage() {
  const [activeImages, setActiveImages] = useState(
    serviceCategories.map((cat) => cat.services[0].img)
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleHover = (categoryIndex, serviceImg) => {
    const newImages = [...activeImages];
    newImages[categoryIndex] = serviceImg;
    setActiveImages(newImages);
  };

  return (
    <main className="pt-28 bg-gray-950 min-h-screen relative overflow-hidden">
      {/* Twinkling Stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-0 animate-twinkle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 1}s`,
          }}
        />
      ))}
      logistics1.jpeg
      {/* Hero */}
      <section className="h-72 bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent"
        >
          Logistics Services
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Explore our categorized services to find what fits your business
          needs.
        </p>
      </section>
      {/* Service Categories */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {serviceCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-12 items-center`}
          >
            {/* Text */}
            <div>
              <h2
                className={`text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${cat.gradient}`}
              >
                {cat.category}
              </h2>
              <p className="text-gray-400 mb-6">{cat.description}</p>

              {/* Services list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.services.map((s, idx) => (
                  <li
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-xl p-3 text-gray-300 text-sm hover:bg-white/10 cursor-pointer transition"
                    onMouseEnter={() => handleHover(i, s.img)}
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Carousel / Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-[300px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-xl blur-3xl absolute"></div>
              <Slider
                {...sliderSettings}
                className="relative z-10 w-80 md:w-96 h-96"
              >
                <div>
                  <img
                    src={activeImages[i]}
                    alt={cat.category}
                    className="w-full h-96 object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </Slider>
            </div>
          </motion.div>
        ))}
      </section>
      {/* Why Choose Us */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              At <span className="text-blue-400">Tmucheki Investments</span>, we
              go beyond providing services. We deliver{" "}
              <span className="text-blue-400">
                trust, efficiency, and innovation
              </span>{" "}
              with every project.
            </p>
            <div className="mt-10 space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-blue-500/30 shadow-md">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {point.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-[300px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-full blur-3xl absolute"></div>
            <img
              src="/man-trucks.jpg"
              alt="Why Choose Us"
              className="relative z-10 w-80 md:w-96 h-96 drop-shadow-2xl object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 -z-10"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Contact us today and let's make your business shine!
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
        >
          Get a Quote
        </motion.a>
      </section>
      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
      <TestimonialsSlider />
    </main>
  );
}
