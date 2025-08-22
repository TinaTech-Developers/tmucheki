"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const serviceCategories = [
  {
    category: "Signage & Branding",
    description:
      "Transform your business image with professional signage and branding solutions. High-quality signs, banners, and displays that grab attention.",
    services: [
      {
        name: "Outdoor Signage",
        img: "/signage/no-parking-sign-on-white-background-free-vector.jpg",
      },
      {
        name: "Vehicle Branding",
        img: "/signage/353-3534985_vehicle-branding-images-png-transparent-png.png",
      },
      { name: "LED & Neon Signs", img: "/signage/neon.webp" },
      { name: "Custom Banners", img: "/gazebo.jpg" },
    ],
    gradient: "from-blue-400 to-blue-600",
  },
  {
    category: "Printing Services",
    description:
      "Professional printing services for banners, flyers, posters, and promotional materials to boost your business visibility.",
    services: [
      { name: "Flyers & Posters", img: "/printing-flyers.jpg" },
      { name: "Brochures", img: "/printing-brochures.jpg" },
      { name: "Business Cards", img: "/printing-cards.jpg" },
      { name: "Custom Merchandise", img: "/printing-merch.jpg" },
    ],
    gradient: "from-purple-400 to-pink-500",
  },
  {
    category: "Other Services",
    description:
      "Additional services to streamline your business operations and expand your reach.",
    services: [
      { name: "Logistics & Delivery", img: "/logistics-delivery.jpg" },
      { name: "Digital Marketing", img: "/digital-marketing.jpg" },
      { name: "Consultancy", img: "/consultancy.jpg" },
      { name: "Event Support", img: "/event-support.jpg" },
    ],
    gradient: "from-green-400 to-teal-500",
  },
];

export default function CategorizedServicesCarousel() {
  const [activeImages, setActiveImages] = useState(
    serviceCategories.map((cat) => cat.services[0].img)
  );

  const settings = {
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
    <main className="pt-28 bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="h-72 bg-gray-100 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent"
        >
          Our Services
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
                {...settings}
                className="relative z-10 w-80 md:w-96 h-96 "
              >
                <div>
                  <img
                    src={activeImages[i]}
                    alt={cat.category}
                    className="w-full h-96 object-contain rounded-xl shadow-2xl"
                  />
                </div>
              </Slider>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
