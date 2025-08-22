"use client";
import { motion } from "framer-motion";

const otherServices = [
  {
    title: "Printing Services",
    description:
      "High-quality banners, flyers, posters, and promotional materials tailored to your business.",
    icon: "/icons/printing.png",
  },
  {
    title: "Logistics & Delivery",
    description:
      "Reliable transport and delivery solutions to ensure your goods arrive safely and on time.",
    icon: "/icons/logistics.png",
  },
  {
    title: "Consultancy",
    description:
      "Expert guidance to streamline your operations and boost business efficiency.",
    icon: "/icons/consultancy.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach more customers online with effective campaigns and social media management.",
    icon: "/icons/marketing.png",
  },
];

export default function AdditionalServices() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16"
      >
        Other{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {otherServices.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>
    </section>
  );
}
