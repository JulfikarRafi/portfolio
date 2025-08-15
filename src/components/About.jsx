// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-20 bg-black text-white overflow-hidden"
//     >
//       {/* Background gradient & subtle glow */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-black z-0"></div>
//       <div className="absolute inset-0">
//         <span
//           className="absolute w-72 h-72 bg-[#8FE6FF]/20 rounded-full top-10 left-10 animate-[pulse_10s_ease-in-out_infinite]"
//           style={{ animation: "pulse 10s ease-in-out infinite" }}
//         ></span>
//         <span
//           className="absolute w-96 h-96 bg-[#FF6FD8]/20 rounded-full bottom-20 right-20 animate-[pulse_12s_ease-in-out_infinite]"
//           style={{ animation: "pulse 12s ease-in-out infinite" }}
//         ></span>
//       </div>

//       {/* Keyframes for pulse */}
//       <style>
//         {`
//           @keyframes pulse {
//             0%, 100% { transform: scale(1); opacity: 0.2; }
//             50% { transform: scale(1.2); opacity: 0.5; }
//           }
//         `}
//       </style>

//       {/* Content */}
//       <motion.div
//         className="relative z-10 max-w-5xl w-full space-y-8 md:space-y-12"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-[#8FE6FF] text-center md:text-left">
//           About Me
//         </h2>

//         <motion.div
//           className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 space-y-4 shadow-xl"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//         >
//           <p className="text-white/90 text-lg md:text-xl leading-relaxed">
//             My name is <span className="text-[#8FE6FF] font-semibold">Julfikar Al Rafi</span>, and I am a passionate frontend developer. I enjoy crafting visually stunning, interactive web interfaces that users love.
//           </p>

//           <p className="text-white/70 text-lg md:text-xl leading-relaxed">
//             I started my programming journey in university, learning Python, C, and C++. Later, I joined <span className="text-[#8FE6FF] font-semibold">Programming Hero</span> and dove deep into <span className="text-[#8FE6FF] font-semibold">MERN stack development</span>. Since then, I have been building dynamic web applications and polishing my frontend design skills.
//           </p>

//           <p className="text-white/70 text-lg md:text-xl leading-relaxed">
//             I enjoy creating beautiful frontend designs and bringing creative ideas to life. My work style is simple: I talk less and focus more on delivering results.
//           </p>

//           <p className="text-white/70 text-lg md:text-xl leading-relaxed">
//             Outside of programming, I love <span className="text-[#8FE6FF] font-semibold">gaming</span> and exploring new things. I enjoy discovering new technologies, learning constantly, and pushing my limits.
//           </p>

//           <p className="text-white/70 text-lg md:text-xl leading-relaxed">
//             I’m someone who values efficiency, creativity, and continuous learning. I strive to combine my technical skills with aesthetic sense to create amazing web experiences.
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const About = () => {
  // Floating animation variants
  const floatVariant = {
    float: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-20 bg-black text-white overflow-hidden pt-20 "
    >
      {/* Background gradient & subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-black z-0"></div>
      <div className="absolute inset-0">
        <span
          className="absolute w-72 h-72 bg-[#8FE6FF]/20 rounded-full top-10 left-10"
          style={{ animation: "pulse 10s ease-in-out infinite" }}
        ></span>
        <span
          className="absolute w-96 h-96 bg-[#FF6FD8]/20 rounded-full bottom-20 right-20"
          style={{ animation: "pulse 12s ease-in-out infinite" }}
        ></span>
      </div>

      {/* Keyframes for pulse */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.2); opacity: 0.5; }
          }
        `}
      </style>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full space-y-8 md:space-y-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#8FE6FF] text-center md:text-left">
          About Me
        </h2>

        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 space-y-4 shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            My name is <span className="text-[#8FE6FF] font-semibold">Julfikar Al Rafi</span>, and I am a passionate frontend developer. I enjoy crafting visually stunning, interactive web interfaces that users love.
          </p>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            I started my programming journey in university, learning Python, C, and C++. Later, I joined <span className="text-[#8FE6FF] font-semibold">Programming Hero</span> and dove deep into <span className="text-[#8FE6FF] font-semibold">MERN stack development</span>. Since then, I have been building dynamic web applications and polishing my frontend design skills.
          </p>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            I enjoy creating beautiful frontend designs and bringing creative ideas to life. My work style is simple: I talk less and focus more on delivering results.
          </p>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Outside of programming, I love <span className="text-[#8FE6FF] font-semibold">gaming</span> and exploring new things. I enjoy discovering new technologies, learning constantly, and pushing my limits.
          </p>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            I’m someone who values efficiency, creativity, and continuous learning. I strive to combine my technical skills with aesthetic sense to create amazing web experiences.
          </p>

          {/* Floating Social Links */}
          <div className="flex space-x-6 mt-6 justify-center md:justify-start">
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8FE6FF] hover:text-white text-2xl transition-colors"
              variants={floatVariant}
              animate="float"
              transition={{ delay: 0 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8FE6FF] hover:text-white text-2xl transition-colors"
              variants={floatVariant}
              animate="float"
              transition={{ delay: 0.3 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8FE6FF] hover:text-white text-2xl transition-colors"
              variants={floatVariant}
              animate="float"
              transition={{ delay: 0.6 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

