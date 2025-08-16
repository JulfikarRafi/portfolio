


// import React from "react";
// import { NavLink } from "react-router";

// const projects = [
//   {
//     id: 1,
//     name: "Life Pulse",
//     image: "https://i.ibb.co.com/Df9JCVF8/blood.png",
//     stack: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Tailwind"],
//     description:
//       "A blood donation web app with role-based dashboards and real-time donation management.",
//     liveLink: "https://lifepulse.example.com",
//     githubLink: "https://github.com/yourusername/lifepulse-client",
//     challenges:
//       "Implementing JWT authentication with Firebase and real-time data updates.",
//     futurePlans: "Add AI-based donor matching and push notifications.",
//   },
//   {
//     id: 2,
//     name: "Share Bite",
//     image: "https://i.ibb.co.com/xrLrvW9/sharebite.png",
//     stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Firebase"],
//     description:
//       "A platform for reducing food waste by connecting donors with NGOs.",
//     liveLink: "https://sharebite.example.com",
//     githubLink: "https://github.com/yourusername/sharebite-client",
//     challenges:
//       "Handling large media uploads and building an optimized search/filter system.",
//     futurePlans: "Implement geolocation-based donation tracking.",
//   },
//   {
//     id: 3,
//     name: "Green Space",
//     image: "https://i.ibb.co.com/FbvP3v2q/greenspace.png",
//     stack: ["React", "Tailwind", "Vercel"],
//     description: "A platform for plant care and plant management to ensure plants good health.",
//     liveLink: "https://portfolio.example.com",
//     githubLink: "https://github.com/yourusername/portfolio-client",
//     challenges:
//       "Making it fully responsive and implementing smooth animations.",
//     futurePlans: "Add a blog section and interactive animations.",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="relative w-full min-h-screen px-5 md:px-20 py-20 bg-black overflow-hidden"
//     >
//       {/* Floating neon circles (no Tailwind config needed) */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Circle 1 */}
//         <span
//           className="absolute w-72 h-72 rounded-full bg-[#8FE6FF]/20 top-10 left-8"
//           style={{ animation: "float1 16s ease-in-out infinite" }}
//         />
//         {/* Circle 2 */}
//         <span
//           className="absolute w-96 h-96 rounded-full bg-[#FF6FD8]/20 bottom-16 right-10"
//           style={{ animation: "float2 20s ease-in-out infinite" }}
//         />
//         {/* Circle 3 */}
//         <span
//           className="absolute w-64 h-64 rounded-full bg-[#6FFFB0]/20 top-1/3 right-1/3"
//           style={{ animation: "float3 18s ease-in-out infinite" }}
//         />
//         {/* Circle 4 */}
//         <span
//           className="absolute w-80 h-80 rounded-full bg-[#FFD86F]/16 bottom-1/4 left-1/4"
//           style={{ animation: "float4 22s ease-in-out infinite" }}
//         />
//       </div>

//       {/* Keyframes (inline so it works without tailwind.config.js) */}
//       <style>
//         {`
//           @keyframes float1 {
//             0%   { transform: translate(0px, 0px); opacity: .25; }
//             50%  { transform: translate(24px, -28px); opacity: .55; }
//             100% { transform: translate(0px, 0px); opacity: .25; }
//           }
//           @keyframes float2 {
//             0%   { transform: translate(0px, 0px); opacity: .22; }
//             50%  { transform: translate(-36px, 34px); opacity: .5; }
//             100% { transform: translate(0px, 0px); opacity: .22; }
//           }
//           @keyframes float3 {
//             0%   { transform: translate(0px, 0px); opacity: .2; }
//             50%  { transform: translate(18px, -22px); opacity: .48; }
//             100% { transform: translate(0px, 0px); opacity: .2; }
//           }
//           @keyframes float4 {
//             0%   { transform: translate(0px, 0px); opacity: .18; }
//             50%  { transform: translate(-22px, 20px); opacity: .42; }
//             100% { transform: translate(0px, 0px); opacity: .18; }
//           }
//         `}
//       </style>

//       {/* Section Header */}
//       <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-center text-white mb-12">
//         My Projects
//       </h2>

//       {/* Projects Grid */}
//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-5 border border-white/20 hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="w-full h-48 object-cover rounded-lg mb-5"
//             />
//             <h3 className="text-xl font-semibold text-white mb-3">
//               {project.name}
//             </h3>
//             <p className="text-gray-300 text-sm mb-5">{project.description}</p>
//             <NavLink
//               to={`/projects/${project.id}`}
//               state={project}
//               className="block text-center bg-gradient-to-r from-[#8FE6FF] to-[#56C9FF] text-black font-medium px-4 py-2 rounded-lg hover:opacity-90"
//             >
//               View More / Details
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Life Pulse",
    image: "https://i.ibb.co.com/Df9JCVF8/blood.png",
    stack: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Tailwind"],
    description:
      "A blood donation web app with role-based dashboards and real-time donation management.",
    liveLink: "https://lifepulse.example.com",
    githubLink: "https://github.com/yourusername/lifepulse-client",
    challenges:
      "Implementing JWT authentication with Firebase and real-time data updates.",
    futurePlans: "Add AI-based donor matching and push notifications.",
  },
  {
    id: 2,
    name: "Share Bite",
    image: "https://i.ibb.co.com/xrLrvW9/sharebite.png",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "Firebase"],
    description:
      "A platform for reducing food waste by connecting donors with NGOs.",
    liveLink: "https://sharebite.example.com",
    githubLink: "https://github.com/yourusername/sharebite-client",
    challenges:
      "Handling large media uploads and building an optimized search/filter system.",
    futurePlans: "Implement geolocation-based donation tracking.",
  },
  {
    id: 3,
    name: "Green Space",
    image: "https://i.ibb.co.com/FbvP3v2q/greenspace.png",
    stack: ["React", "Tailwind", "Vercel"],
    description:
      "A platform for plant care and plant management to ensure plants good health.",
    liveLink: "https://portfolio.example.com",
    githubLink: "https://github.com/yourusername/portfolio-client",
    challenges:
      "Making it fully responsive and implementing smooth animations.",
    futurePlans: "Add a blog section and interactive animations.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen px-5 md:px-20 py-20 bg-black overflow-hidden"
    >
      {/* Floating neon circles */}
      <div className="absolute inset-0 pointer-events-none">
        <span
          className="absolute w-72 h-72 rounded-full bg-[#8FE6FF]/20 top-10 left-8"
          style={{ animation: "float1 16s ease-in-out infinite" }}
        />
        <span
          className="absolute w-96 h-96 rounded-full bg-[#FF6FD8]/20 bottom-16 right-10"
          style={{ animation: "float2 20s ease-in-out infinite" }}
        />
        <span
          className="absolute w-64 h-64 rounded-full bg-[#6FFFB0]/20 top-1/3 right-1/3"
          style={{ animation: "float3 18s ease-in-out infinite" }}
        />
        <span
          className="absolute w-80 h-80 rounded-full bg-[#FFD86F]/16 bottom-1/4 left-1/4"
          style={{ animation: "float4 22s ease-in-out infinite" }}
        />
      </div>

      {/* Floating animations keyframes */}
      <style>
        {`
          @keyframes float1 {
            0%   { transform: translate(0px, 0px); opacity: .25; }
            50%  { transform: translate(24px, -28px); opacity: .55; }
            100% { transform: translate(0px, 0px); opacity: .25; }
          }
          @keyframes float2 {
            0%   { transform: translate(0px, 0px); opacity: .22; }
            50%  { transform: translate(-36px, 34px); opacity: .5; }
            100% { transform: translate(0px, 0px); opacity: .22; }
          }
          @keyframes float3 {
            0%   { transform: translate(0px, 0px); opacity: .2; }
            50%  { transform: translate(18px, -22px); opacity: .48; }
            100% { transform: translate(0px, 0px); opacity: .2; }
          }
          @keyframes float4 {
            0%   { transform: translate(0px, 0px); opacity: .18; }
            50%  { transform: translate(-22px, 20px); opacity: .42; }
            100% { transform: translate(0px, 0px); opacity: .18; }
          }
        `}
      </style>

      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-5xl font-bold text-center text-white mb-12"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-5 border border-white/20 hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 40 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-5"
            />
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.name}
            </h3>
            <p className="text-gray-300 text-sm mb-5">{project.description}</p>
            <NavLink
              to={`/projects/${project.id}`}
              state={project}
              className="block text-center bg-gradient-to-r from-[#8FE6FF] to-[#56C9FF] text-black font-medium px-4 py-2 rounded-lg hover:opacity-90"
            >
              View More / Details
            </NavLink>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;


