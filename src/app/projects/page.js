"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Projects data
const projectCategories = [
  {
    category: "Signage",
    projects: [
      { title: "Outdoor Billboard", img: "/signage/IMG-20241023-WA0037.jpg" },
      { title: "Vehicle Branding", img: "/SignZoo-Vehicle-Cluster.webp" },
      {
        title: "LED Store Sign",
        img: "/signage/good-vibes-neon-1200x1200.jpg",
      },
    ],
  },
  {
    category: "Printing",
    projects: [
      { title: "DTF Printing", img: "/signage/l402-2-dtf-printer.webp" },
      {
        title: "Sublimation Printing",
        img: "/signage/360_F_410944779_On3gLRf4PIbX1k90hdAGtONK4FpjiQNw.jpg",
      },
      { title: "CNC Cutting", img: "/signage/1-21.webp" },
    ],
  },
  {
    category: "Logistics",
    projects: [
      { title: "Truck Delivery", img: "/logistics/logistics1.jpeg" },
      { title: "Warehouse Setup", img: "/logistics/gps-truck.jpg" },
      { title: "Fleet Management", img: "/logistics/logistics3.jpeg" },
    ],
  },
];

// Featured projects for top carousel
const featuredProjects = [
  {
    title: "Gazebo Signage & Backdrop  Banners",
    img: "/signage/gazebo.jpg",
  },
  {
    title: "Premium Vehicle Branding",
    img: "/SignZoo-Vehicle-Cluster.webp",
  },
  { title: "Custom Banners", img: "/projects/IMG-20250311-WA0039.jpg" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projectCategories.flatMap((cat) => cat.projects)
      : projectCategories.find((cat) => cat.category === activeCategory)
          ?.projects || [];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <main className="pt-28 bg-gray-950 min-h-screen relative overflow-hidden">
      {/* Hero Header */}
      <section className="h-72 bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent"
        >
          Projects Showcase
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Discover how we bring ideas to life with bold signage, premium
          printing, and efficient logistics.
        </p>
      </section>

      {/* Hero with animated stars */}
      <section className="h-52 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {windowWidth > 0 &&
            [...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                  x: Math.random() * windowWidth,
                  y: Math.random() * 300,
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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent z-10"
        >
          Streamline Our Projects
        </motion.h1>
        <p className="mt-4 max-w-3xl text-gray-200 z-10">
          Discover how we bring ideas to life with bold signage, premium
          printing, and efficient logistics.
        </p>
      </section>

      {/* Featured Projects Carousel */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <Slider {...sliderSettings}>
          {featuredProjects.map((proj, i) => (
            <div key={i} className="px-4">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  height={384}
                  width={384}
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover bg-white"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {proj.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-8">
        <div className="flex justify-center flex-wrap gap-4">
          {["All", "Signage", "Printing", "Logistics"].map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-2xl"
            >
              <Image
                height={384}
                width={384}
                src={proj.img}
                alt={proj.title}
                className="w-full h-64 object-cover bg-white transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {proj.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 -z-10"></div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Inspired by Our Work?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Reach out today and let’s bring your project vision to life!
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl shadow-lg"
        >
          Contact Us
        </motion.a>
      </section>
    </main>
  );
}
