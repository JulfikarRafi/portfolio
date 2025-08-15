import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black min-h-screen flex items-center justify-center px-5 md:px-20 py-16"
    >
      {/* Premium Neon Gradient Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FE6FF] via-[#00f0ff33] to-transparent animate-pulse opacity-30 blur-2xl"></div>

      {/* Contact Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Get In <span className="text-[#8FE6FF]">Touch</span>
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-lg text-white">
          {/* Email */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <FaEnvelope className="text-[#8FE6FF] text-2xl" />
            <a
              href="mailto:julfikar.rafi@example.com"
              className="hover:text-[#8FE6FF] transition"
            >
              prorafi1234@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <FaPhoneAlt className="text-[#8FE6FF] text-2xl" />
            <a
              href="tel:+8801700000000"
              className="hover:text-[#8FE6FF] transition"
            >
              +880 1746-471169
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 hover:scale-105 transition-transform">
            <FaWhatsapp className="text-[#8FE6FF] text-2xl" />
            <a
              href="http://wa.me/+8801746471169"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8FE6FF] transition"
            >
              +880 1746-471169 (WhatsApp)
            </a>
          </div>
        </div>

        {/* Decorative Glow Line */}
        <div className="mt-8 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8FE6FF] to-transparent animate-pulse"></div>

        {/* Footer Message */}
        <p className="mt-6 text-center text-gray-300 text-sm">
          I’ll try my best to reply as soon as possible. Let’s create something
          <span className="text-[#8FE6FF] font-semibold"> amazing</span> together!
        </p>
      </div>
    </section>
  );
};

export default Contact;
