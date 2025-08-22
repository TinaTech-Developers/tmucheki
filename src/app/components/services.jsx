"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function ServicesSection() {
  // Variants for card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-gray-950/80 -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Core Services
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Delivering excellence in{" "}
          <span className="text-blue-400">printing, signage,</span> and{" "}
          <span className="text-blue-400">logistics</span> to help your business
          grow.
        </p>
      </motion.div>

      {/* Services cards */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        {[
          {
            title: "Printing & Branding",
            desc: "From business cards to billboards, we deliver top-quality printing solutions.",
            icon: "🖨️",
          },
          {
            title: "Signage Solutions",
            desc: "Eye-catching outdoor & indoor signage that makes your brand stand out.",
            icon: "📢",
          },
          {
            title: "Logistics",
            desc: "Safe and reliable transport of goods across borders.",
            icon: "🚛",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-blue-900/40"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-3xl text-white mb-6 shadow-lg transition"
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">{service.desc}</p>

            <Link
              href={"/services"}
              className="absolute top-4 right-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Explore
            </Link>
            {/* Underline glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
