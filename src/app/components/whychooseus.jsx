"use client";

import { motion } from "framer-motion";
import React from "react";
import { ShieldCheck, ThumbsUp, Clock, Globe } from "lucide-react";
import Image from "next/image";

function WhyChooseUs() {
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

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-blue-950 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
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

          {/* Points list */}
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

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="w-[300px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-full blur-3xl absolute"></div>
          <Image
            quality={100}
            width={500}
            height={600}
            src="/logistics5.jpeg"
            alt="Why Choose Us"
            className="relative z-10 w-80 md:w-96 h-96 drop-shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
