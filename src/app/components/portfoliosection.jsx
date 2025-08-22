"use client";

import { motion } from "framer-motion";
import React from "react";

function PortfolioSection() {
  const projects = [
    {
      title: "Corporate Branding",
      image: "/man-trucks.jpg",
      desc: "Complete business branding package with print & digital assets.",
    },
    {
      title: "Billboard Signage",
      image: "/portfolio/signage.jpg",
      desc: "High-visibility outdoor signage designed to attract attention.",
    },
    {
      title: "Logistics Solutions",
      image: "/portfolio/logistics.jpg",
      desc: "Safe & timely transport of goods across regional borders.",
    },
    {
      title: "Custom Packaging",
      image: "/portfolio/packaging.jpg",
      desc: "Branded packaging that boosts your product’s appeal.",
    },
    {
      title: "Event Printing",
      image: "/portfolio/events.jpg",
      desc: "Posters, banners & stage branding for events and expos.",
    },
    {
      title: "Vehicle Branding",
      image: "/portfolio/vehicles.jpg",
      desc: "Professional vehicle wraps for moving brand visibility.",
    },
  ];

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-gray-950 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A showcase of the impactful work we’ve delivered for clients across
          industries.
        </p>
      </div>

      {/* Grid Showcase */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
