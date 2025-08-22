"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 to-blue-800/10 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-4">
            Tmucheki Investments
          </h3>
          <p className="text-gray-400 text-sm">
            Delivering professional branding, signage, and logistics services to
            help your business thrive.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/testimonials"
                className="hover:text-blue-400 transition"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h4 className="text-white font-semibold mb-4">
            Subscribe to our newsletter
          </h4>
          <p className="text-gray-400 mb-4 text-sm">
            Get the latest updates and offers directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-gray-900 font-semibold rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10"></div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Tmucheki Investments. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
