"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser"; // ✅ npm install @emailjs/browser

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Replace with your own EmailJS IDs
    const serviceID = "service_ndnbumi";
    const templateID = "template_6omctrp";
    const publicKey = "9xNbGVKu3I6FRIyP9";

    // ✅ Add sender info inside message for visibility
    const emailData = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: `From: ${form.name} (${form.email})\n\n${form.message}`,
      reply_to: form.email, // important for Reply-To header
    };

    emailjs.send(serviceID, templateID, emailData, publicKey).then(
      (response) => {
        setLoading(false);
        alert("✅ Thank you! Your message has been sent successfully.");
        console.log("EmailJS success:", response.status, response.text);
        setForm({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        setLoading(false);
        alert("❌ Oops! Something went wrong. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <>
      <Head>
        <title>
          Contact Tmucheki Investments | Signage, Printing & Logistics Zimbabwe
        </title>
        <meta
          name="description"
          content="Get in touch with Tmucheki Investments for logistics, signage and printing services in Zimbabwe."
        />
        <meta
          name="keywords"
          content="Contact Tmucheki Investments, Signage Zimbabwe, Printing services Zimbabwe, Logistics companies in Zimbabwe, Branding Zimbabwe, Business signage Harare"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Contact Tmucheki Investments | Signage, Printing & Logistics Zimbabwe"
        />
        <meta
          property="og:description"
          content="Get in touch with Tmucheki Investments for signage, printing, and logistics services in Zimbabwe."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tmuchekiinvestments.co.zw/contact"
        />
        <meta property="og:site_name" content="Tmucheki Investments" />
        <meta
          property="og:image"
          content="https://tmuchekiinvestments.co.zw/logo.png"
        />
      </Head>

      <main className="pt-28 bg-gray-950 min-h-screen">
        {/* Hero */}
        <section className="h-72 flex flex-col justify-center items-center text-center px-6 bg-gray-100">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-900 bg-clip-text text-transparent"
          >
            Contact Us
          </motion.h1>
          <p className="mt-4 max-w-3xl text-gray-700">
            Have a project in mind? Reach out to our team and we’ll make it
            happen.
          </p>
        </section>

        {/* Contact Form & Info */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Send Us a Message
            </h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              className={`w-full py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl shadow-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Whether you have a question about our services, pricing, or want
              to discuss a project, our team is ready to help.
            </p>

            <div className="flex items-center gap-4">
              <FiPhone className="w-6 h-6 text-blue-400" />
              <span>+263 78 693 5308 | +263 77 349 7946</span>
            </div>

            <div className="flex items-center gap-4">
              <FiMail className="w-6 h-6 text-blue-400" />
              <span>muchekiinsvest@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="w-6 h-6 text-blue-400" />
              <span>No. 371 Galloway Road, Norton, Zimbabwe</span>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.2076596392126!2d30.68675347517628!3d-17.87574098309713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19311037e1360191%3A0x96daafaf2711987a!2s371%20Galloway%20Rd%2C%20Norton!5e0!3m2!1sen!2szw!4v1762940628555!5m2!1sen!2szw"
                className="w-full h-64 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
