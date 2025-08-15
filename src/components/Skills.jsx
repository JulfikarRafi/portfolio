import React from "react";
import { motion } from "framer-motion";

// Skill logos - you can replace these with your preferred logos or icons
import { SiMongodb, SiExpress, SiReact, SiJavascript, SiFirebase, SiTailwindcss, SiHtml5, SiVercel, SiNetlify, SiGit, SiGithub, SiNodedotjs } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs></SiNodedotjs> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen px-5 md:px-20 py-20 bg-black overflow-hidden flex flex-col items-center"
    >
      {/* Background neon circles */}
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

      {/* Pulse keyframes */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.2; }
            50% { transform: scale(1.2); opacity: 0.5; }
          }
        `}
      </style>

      <h2 className="text-4xl md:text-5xl font-bold text-[#8FE6FF] z-10 mb-12">
        My Skills
      </h2>

      <div className="relative z-10 w-full grid gap-8 md:gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {skillsData.map((category, idx) => (
          <motion.div
            key={category.category}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 flex flex-col items-center space-y-6 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="text-[#8FE6FF] text-2xl font-semibold mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-4xl md:text-5xl text-[#8FE6FF] mb-2">
                    {skill.icon}
                  </span>
                  <span className="text-white/90 text-sm md:text-base font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
