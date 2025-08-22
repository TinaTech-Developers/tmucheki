"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  const stars = [...Array(30)].map((_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 3 + 1 + "px",
    delay: Math.random() * 2 + "s",
    duration: Math.random() * 2 + 1 + "s",
  }));

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-950 -z-10"></div>

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-0 animate-twinkle"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6 relative z-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug mb-6">
          Ready to grow your business?{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Let's work together!
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          At <span className="text-blue-400">Tmucheki Investments</span>, we
          help you achieve results with professional signage, branding, and
          logistics services. Take the next step and see your business thrive.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/contact"
            className="px-8 py-4 bg-blue-400 hover:bg-blue-500 text-gray-900 font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="/services"
            className="px-8 py-4 border border-blue-500 text-blue-400 hover:bg-white/5 rounded-lg font-semibold transition duration-300"
          >
            Explore Services
          </a>
        </div>
      </motion.div>

      {/* Decorative glow behind */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>

      {/* Tailwind custom animation */}
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
    </section>
  );
}
