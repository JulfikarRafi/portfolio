import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black shadow-sm text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8FE6FF] via-[#00f0ff33] to-transparent animate-pulse opacity-30 blur-2xl"></div>
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold neon-text mb-3">My Portfolio</h2>
          <p className="text-gray-300 text-sm">
            Showcasing my projects, skills, and passion for building beautiful,
            functional, and scalable applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-3 neon-text">Quick Links</h3>
          <ul className="space-y-2">
            {[ "About", "Projects", "Skills", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:pl-1"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-3 neon-text">Get in Touch</h3>
          <p className="text-gray-300 text-sm mb-4">
            Let’s connect! Feel free to reach out via email or social media.
          </p>
          <div className="flex space-x-4 text-xl">
            <a
              href="prorafi1234@gmail.com"
              className="hover:text-pink-400 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/JulfikarRafi"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/julfikarrafi/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/RaidenCMR"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Dev_Rafi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
