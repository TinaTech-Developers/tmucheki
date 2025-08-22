"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ThumbsUp, Clock, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const values = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: "Integrity",
    desc: "Honesty and transparency in everything we do.",
  },
  {
    icon: <ThumbsUp className="w-7 h-7 text-blue-400" />,
    title: "Excellence",
    desc: "Delivering the highest standards of quality.",
  },
  {
    icon: <Clock className="w-7 h-7 text-blue-400" />,
    title: "Timeliness",
    desc: "Projects delivered on schedule.",
  },
  {
    icon: <Globe className="w-7 h-7 text-blue-400" />,
    title: "Innovation",
    desc: "Providing modern solutions for our clients.",
  },
];

export default function AboutPage() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 400,
      color: i % 3 === 0 ? "bg-blue-400/70" : "bg-white/70",
    }));
    setBubbles(generated);
  }, []);

  return (
    <main className="pt-28 bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="h-72 flex flex-col justify-center items-center text-center px-6 bg-gray-100 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent"
        >
          About Us
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Discover <span className="text-blue-400">Tmucheki Investments</span>,
          our story, values, and what drives us forward.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-12 relative overflow-hidden">
        {/* Floating bubbles */}
        <div className="absolute inset-0 z-0">
          {bubbles.map((b) => (
            <motion.div
              key={b.id}
              className={`absolute w-2 h-2 rounded-full ${b.color}`}
              style={{ left: b.x, top: b.y }}
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                y: [b.y, b.y - 50, b.y],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2 + Math.random() * 3,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Founded to provide top-tier signage, printing, and logistics
            solutions,{" "}
            <span className="text-blue-400">Tmucheki Investments</span> has
            become a trusted partner for businesses across Zimbabwe. We are
            committed to excellence, innovation, and reliability in every
            project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Empowering businesses with services that elevate their brand,
            streamline operations, and drive growth through creativity,
            expertise, and dedication.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-md hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{val.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-2">
                {val.title}
              </h3>
              <p className="text-gray-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Ready to Work With Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Contact our team today and start your next project with confidence!
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
        >
          Get in Touch
        </motion.a>
      </section>
    </main>
  );
}
