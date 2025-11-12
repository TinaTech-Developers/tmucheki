"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "Services", "Projects", "About", "Contact"];
  const serviceItems = [
    { name: "Signage & Printing", href: "/services/printing" },
    { name: "Logistics & Transport", href: "/services/logistics" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[200] px-2 w-[95%] md:w-[90%]"
      >
        <div className="bg-gradient-to-r from-[#0a1a2f]/90 via-[#0f2a4f]/90 to-[#1a3d7c]/90 backdrop-blur-lg h-16 flex items-center justify-between px-6 md:px-10 py-3 shadow-lg border border-white/30">
          {/* Logo with visible glow */}
          <Link href="/" className="relative flex items-center gap-3">
            {/* Glow behind logo */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 120,
                height: 20,
                left: -10,
                top: -5,
                background: "white",
                filter: "blur(20px)",
                opacity: 0.4,
              }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />

            {/* Actual logo */}
            <Image
              src="/logowhite.png"
              alt="logo"
              width={100}
              height={40}
              className="relative z-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-white font-medium  relative">
            {navItems.map((item) =>
              item === "Services" ? (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="hover:text-blue-300 transition">
                    Services ▾
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 bg-gradient-to-r from-[#0a1a2f]/95 to-[#10335f]/95 backdrop-blur-md rounded-lg  shadow-lg p-4 flex flex-col space-y-3 text-sm min-w-[220px] border border-white/10"
                      >
                        {serviceItems.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            className="hover:text-blue-300 transition"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-b from-[#0a1a2f]/95 via-[#0f2a4f]/95 to-[#0a1a2f]/95 backdrop-blur-lg z-[150] flex flex-col items-center justify-center space-y-10 text-2xl text-white"
          >
            {navItems.map((item) =>
              item === "Services" ? (
                <div
                  key={item}
                  className="flex flex-col items-center space-y-3"
                >
                  <span className="text-blue-300 font-semibold">Services</span>
                  {serviceItems.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={toggleMenu}
                      className="hover:text-blue-300 transition text-lg"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="hover:text-blue-300 transition"
                >
                  {item}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
