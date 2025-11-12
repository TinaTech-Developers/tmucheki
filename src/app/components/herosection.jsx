"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const floatingShapes = [
  { size: 80, left: "10%", top: "20%", delay: 0 },
  { size: 120, left: "70%", top: "10%", delay: 1 },
  { size: 60, left: "50%", top: "75%", delay: 2 },
];

const slides = [
  {
    image: "/gazebo.jpg",
    headline: "Professional Signage & Printing Solutions",
    subtitle:
      "High-quality branding that makes your business stand out in any environment.",
  },
  {
    image: "/logistics5.jpeg",
    headline: "Trusted Logistics Across Borders",
    subtitle: "Safe and reliable transport of goods in and out of the country.",
  },
  {
    image: "/projects/IMG-20250311-WA0039.jpg",
    headline: "Innovative Printing Services",
    subtitle:
      "From business cards to billboards – we deliver quality and consistency.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-6 text-center">
      {/* Background images carousel */}
      <div className="absolute inset-0 -z-20">
        {slides.map(({ image }, i) => (
          <motion.img
            key={i}
            src={image}
            alt={`Background ${i + 1}`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/80 to-black/90" />
      </div>

      {/* Floating shapes */}
      {floatingShapes.map(({ size, left, top, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{
            delay,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-blue-600 blur-xl "
          style={{ width: size, height: size, left, top }}
        />
      ))}

      {/* Rotating logo icon with flashing light */}
      <div
        className="relative my-10"
        style={{ width: 100, height: 100, perspective: 800 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-300 blur-2xl "
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 3D horizontal rotation logo */}
        <motion.div
          animate={{ rotateX: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="relative z-10 w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            height={384}
            width={384}
            src="/logo.png"
            alt="Tmucheki Investments Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Slide text */}
      {slides.map(({ headline, subtitle }, i) =>
        i === currentIndex ? (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-white bg-clip-text text-transparent leading-tight drop-shadow-lg">
              {headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        ) : null
      )}

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
      >
        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 transition text-white font-semibold shadow-lg"
        >
          Get a Quote
        </Link>
        <Link
          href="/services"
          className="px-8 py-4 rounded-full border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition font-semibold shadow-lg"
        >
          Our Services
        </Link>
      </motion.div>
    </section>
  );
}
