



// import React from "react";
// import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative bg-black min-h-screen flex items-center justify-center px-5 md:px-20 py-16"
//     >
//       {/* Premium Neon Gradient Background Animation */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//         className="absolute inset-0 bg-gradient-to-br from-[#8FE6FF] via-[#00f0ff33] to-transparent blur-2xl"
//       ></motion.div>

//       {/* Contact Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative z-10 w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-lg"
//       >
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
//         >
//           Get In <span className="text-[#8FE6FF]">Touch</span>
//         </motion.h2>

//         {/* Contact Info */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0, y: 30 },
//             visible: {
//               opacity: 1,
//               y: 0,
//               transition: { staggerChildren: 0.2, duration: 0.6 },
//             },
//           }}
//           className="flex flex-col gap-6 text-lg text-white"
//         >
//           {/* Email */}
//           <motion.div
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             className="flex items-center gap-4 hover:scale-105 transition-transform"
//           >
//             <FaEnvelope className="text-[#8FE6FF] text-2xl" />
//             <a
//               href="mailto:prorafi1234@gmail.com"
//               className="hover:text-[#8FE6FF] transition"
//             >
//               prorafi1234@gmail.com
//             </a>
//           </motion.div>

//           {/* Phone */}
//           <motion.div
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             className="flex items-center gap-4 hover:scale-105 transition-transform"
//           >
//             <FaPhoneAlt className="text-[#8FE6FF] text-2xl" />
//             <a
//               href="tel:+8801746471169"
//               className="hover:text-[#8FE6FF] transition"
//             >
//               +880 1746-471169
//             </a>
//           </motion.div>

//           {/* WhatsApp */}
//           <motion.div
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             className="flex items-center gap-4 hover:scale-105 transition-transform"
//           >
//             <FaWhatsapp className="text-[#8FE6FF] text-2xl" />
//             <a
//               href="http://wa.me/+8801746471169"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#8FE6FF] transition"
//             >
//               +880 1746-471169 (WhatsApp)
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Decorative Glow Line */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-8 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8FE6FF] to-transparent animate-pulse origin-left"
//         ></motion.div>

//         {/* Footer Message */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-6 text-center text-gray-300 text-sm"
//         >
//           I’ll try my best to reply as soon as possible. Let’s create something
//           <span className="text-[#8FE6FF] font-semibold"> amazing</span> together!
//         </motion.p>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-black min-h-screen flex items-center justify-center px-5 md:px-20 py-16"
    >
      {/* Premium Neon Gradient Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-br from-[#8FE6FF] via-[#00f0ff33] to-transparent blur-2xl"
      ></motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 shadow-lg"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
        >
          Get In <span className="text-[#8FE6FF]">Touch</span>
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.6 },
            },
          }}
          className="flex flex-col gap-6 text-lg text-white mb-10"
        >
          {/* Email */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4 hover:scale-105 transition-transform"
          >
            <FaEnvelope className="text-[#8FE6FF] text-2xl" />
            <a
              href="mailto:prorafi1234@gmail.com"
              className="hover:text-[#8FE6FF] transition"
            >
              prorafi1234@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4 hover:scale-105 transition-transform"
          >
            <FaPhoneAlt className="text-[#8FE6FF] text-2xl" />
            <a
              href="tel:+8801746471169"
              className="hover:text-[#8FE6FF] transition"
            >
              +880 1746-471169
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4 hover:scale-105 transition-transform"
          >
            <FaWhatsapp className="text-[#8FE6FF] text-2xl" />
            <a
              href="http://wa.me/+8801746471169"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8FE6FF] transition"
            >
              +880 1746-471169 (WhatsApp)
            </a>
          </motion.div>
        </motion.div>

        {/* Direct Email Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:prorafi1234@gmail.com?subject=Contact Request&body=${e.target.message.value}`;
          }}
        >
          {/* Email Input */}
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#8FE6FF" }}
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8FE6FF] placeholder-gray-400"
          />

          {/* Message Box */}
          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "#8FE6FF" }}
            name="message"
            rows="4"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#8FE6FF] placeholder-gray-400"
          ></motion.textarea>

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#8FE6FF", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-[#8FE6FF]/20 text-white font-semibold border border-[#8FE6FF] transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Decorative Glow Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8FE6FF] to-transparent animate-pulse origin-left"
        ></motion.div>

        {/* Footer Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-gray-300 text-sm"
        >
          I’ll try my best to reply as soon as possible. Let’s create something
          <span className="text-[#8FE6FF] font-semibold"> amazing</span> together!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;


