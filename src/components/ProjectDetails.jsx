// import React from "react";
// import { useLocation, useNavigate } from "react-router";

// const ProjectDetails = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen text-white">
//         <p>Project details not found.</p>
//         <button
//           onClick={() => navigate("/projects")}
//           className="mt-4 px-5 py-2 bg-purple-600 rounded-lg"
//         >
//           Back to Projects
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black px-5 md:px-20 py-20 text-white">
//       <h2 className="text-4xl font-bold mb-6">{state.name}</h2>
//       <img src={state.image} alt={state.name} className="w-full max-w-3xl rounded-lg mb-6" />
//       <p className="mb-4">{state.description}</p>

//       <h3 className="text-2xl font-semibold mb-2">Technology Stack:</h3>
//       <ul className="list-disc ml-5 mb-4">
//         {state.stack.map((tech, i) => (
//           <li key={i}>{tech}</li>
//         ))}
//       </ul>

//       <h3 className="text-2xl font-semibold mb-2">Challenges Faced:</h3>
//       <p className="mb-4">{state.challenges}</p>

//       <h3 className="text-2xl font-semibold mb-2">Future Plans:</h3>
//       <p className="mb-4">{state.futurePlans}</p>

//       <div className="flex gap-4 mt-6">
//         <a
//           href={state.liveLink}
//           target="_blank"
//           rel="noreferrer"
//           className="bg-blue-500 px-4 py-2 rounded-lg"
//         >
//           Live Site
//         </a>
//         <a
//           href={state.githubLink}
//           target="_blank"
//           rel="noreferrer"
//           className="bg-gray-800 px-4 py-2 rounded-lg"
//         >
//           GitHub
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;



// import React from "react";
// import { useLocation, useNavigate } from "react-router";

// const ProjectDetails = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const project = location.state;

//   // If no project data is found (e.g., direct link without state)
//   if (!project) {
//     return (
//       <section className="min-h-screen flex items-center justify-center bg-black text-white px-5">
//         <div className="text-center">
//           <h2 className="text-2xl mb-4">Project not found</h2>
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-gradient-to-r from-[#8FE6FF] to-[#56C9FF] text-black px-5 py-2 rounded-lg hover:opacity-90"
//           >
//             Go Back
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="relative w-full min-h-screen px-5 md:px-20 py-20 bg-black overflow-hidden">
//       {/* Floating neon circles background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <span
//           className="absolute w-72 h-72 rounded-full bg-[#8FE6FF]/20 top-10 left-8"
//           style={{ animation: "float1 16s ease-in-out infinite" }}
//         />
//         <span
//           className="absolute w-96 h-96 rounded-full bg-[#FF6FD8]/20 bottom-16 right-10"
//           style={{ animation: "float2 20s ease-in-out infinite" }}
//         />
//         <span
//           className="absolute w-64 h-64 rounded-full bg-[#6FFFB0]/20 top-1/3 right-1/3"
//           style={{ animation: "float3 18s ease-in-out infinite" }}
//         />
//         <span
//           className="absolute w-80 h-80 rounded-full bg-[#FFD86F]/16 bottom-1/4 left-1/4"
//           style={{ animation: "float4 22s ease-in-out infinite" }}
//         />
//       </div>

//       {/* Keyframes */}
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

//       {/* Project Card */}
//       <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-md bg-white/10 rounded-2xl shadow-lg p-8 border border-white/20">
//         {/* Project Image */}
//         <img
//           src={project.image}
//           alt={project.name}
//           className="w-full h-64 object-cover rounded-lg mb-6"
//         />

//         {/* Title */}
//         <h2 className="text-3xl font-bold text-white mb-4">{project.name}</h2>

//         {/* Tech Stack */}
//         <div className="mb-5">
//           <h3 className="text-xl text-[#8FE6FF] font-semibold mb-2">
//             Technology Stack
//           </h3>
//           <ul className="flex flex-wrap gap-3">
//             {project.stack.map((tech, index) => (
//               <li
//                 key={index}
//                 className="px-3 py-1 bg-[#8FE6FF]/20 text-white rounded-lg text-sm"
//               >
//                 {tech}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Description */}
//         <div className="mb-5">
//           <h3 className="text-xl text-[#8FE6FF] font-semibold mb-2">
//             Description
//           </h3>
//           <p className="text-gray-300">{project.description}</p>
//         </div>

//         {/* Live Link & GitHub */}
//         <div className="mb-5 flex flex-wrap gap-4">
//           <a
//             href={project.liveLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-[#8FE6FF] to-[#56C9FF] text-black px-4 py-2 rounded-lg hover:opacity-90"
//           >
//             Live Project
//           </a>
//           <a
//             href={project.githubLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gradient-to-r from-[#FF6FD8] to-[#FF4FBF] text-black px-4 py-2 rounded-lg hover:opacity-90"
//           >
//             GitHub Repo
//           </a>
//         </div>

//         {/* Challenges */}
//         <div className="mb-5">
//           <h3 className="text-xl text-[#8FE6FF] font-semibold mb-2">
//             Challenges Faced
//           </h3>
//           <p className="text-gray-300">{project.challenges}</p>
//         </div>

//         {/* Future Plans */}
//         <div>
//           <h3 className="text-xl text-[#8FE6FF] font-semibold mb-2">
//             Future Plans
//           </h3>
//           <p className="text-gray-300">{project.futurePlans}</p>
//         </div>

//         {/* Back Button */}
//         <div className="mt-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-gradient-to-r from-[#8FE6FF] to-[#56C9FF] text-black px-5 py-2 rounded-lg hover:opacity-90"
//           >
//             Back to Projects
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;



// import React from "react";
// import { useParams } from "react-router";

// const ProjectDetails = () => {
//   const { id } = useParams();

//   // Normally you’d fetch project details from an API or local data
//   // For now, let's just mock
//   const projectData = {
//     1: {
//       name: "Life Pulse",
//       tech: "MERN, Firebase, Tailwind",
//       description: "A blood donation platform with role-based dashboards.",
//       liveLink: "https://lifepulse.example.com",
//       githubLink: "https://github.com/user/lifepulse-client",
//       challenges: "Handling JWT cookies across multiple routes.",
//       improvements: "Add real-time chat between donors and requesters."
//     },
//     2: {
//       name: "Share Bite",
//       tech: "MERN, Firebase, Tailwind",
//       description: "A food waste reduction platform.",
//       liveLink: "https://sharebite.example.com",
//       githubLink: "https://github.com/user/sharebite-client",
//       challenges: "Optimizing performance for large food listings.",
//       improvements: "Integrate AI-based food demand prediction."
//     }
//   };

//   const project = projectData[id];

//   if (!project) {
//     return <p className="text-center text-red-500 mt-10">Project not found</p>;
//   }

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-5">
//       <h1 className="text-3xl font-bold neon-text mb-4">{project.name}</h1>
//       <p><strong>Tech Stack:</strong> {project.tech}</p>
//       <p className="mt-2">{project.description}</p>
//       <p className="mt-2"><strong>Challenges:</strong> {project.challenges}</p>
//       <p className="mt-2"><strong>Future Plans:</strong> {project.improvements}</p>
//       <div className="mt-4 space-x-4">
//         <a href={project.liveLink} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
//           Live Project
//         </a>
//         <a href={project.githubLink} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
//           GitHub
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;




import React from "react";
import { NavLink, useParams } from "react-router";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();

  const projectData = {
    1: {
      name: "Life Pulse",
      tech: "MERN, Firebase, Tailwind",
      description: "A blood donation platform with role-based dashboards to donate and find blood as soon as possible.",
      liveLink: "https://lifepulsejarph12t.netlify.app/",
      githubLink: "https://github.com/JulfikarRafi/share-bite-client",
      challenges: "Handling JWT cookies across multiple routes.",
      improvements: "Add real-time chat between donors and requesters."
    },
    2: {
      name: "Share Bite",
      tech: "MERN, Firebase, Tailwind",
      description: "A food waste reduction platform to reduce the wastage of foods in our city",
      liveLink: "https://sharebite.example.com",
      githubLink: "https://github.com/JulfikarRafi/share-bite-client",
      challenges: "Optimizing performance for large food listings.",
      improvements: "Integrate AI-based food demand prediction."
    },
    3: {
        name: "Green Space",
        tech: "MERN, Firebase, Tailwind",
        description: "A Plant care and plant management based platform to take care of our plants",
        liveLink: "https://greenspace1.netlify.app/",
        githubLink: "https://github.com/JulfikarRafi/share-bite-client",
        challenges: "Optimizing performance for large amount of plant management",
        improvements: "Integrate AI-based plant care tracker"
      }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-red-500 text-lg">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] p-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8FE6FF] via-[#00f0ff33] to-transparent animate-pulse opacity-30 blur-2xl"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg p-6 text-white"
      >
        {/* Project Title */}
        <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00f7ff] tracking-wide">
          {project.name}
        </h1>
        <NavLink to='/Projects'>
        <button className="bg-[#00f7ff] text-black font-semibold hover:bg-[#00c4cc] p-2 rounded-lg">
            Back
        </button>
        </NavLink>
        </div>

        {/* Tech Stack */}
        <p className="mb-2 text-sm md:text-base">
          <span className="font-semibold text-[#ff00e6]">Tech Stack:</span> {project.tech}
        </p>

        {/* Description */}
        <p className="mb-4 text-sm md:text-base">{project.description}</p>

        {/* Challenges */}
        <p className="mb-2 text-sm md:text-base">
          <span className="font-semibold text-[#ffae00]">Challenges:</span> {project.challenges}
        </p>

        {/* Future Plans */}
        <p className="mb-6 text-sm md:text-base">
          <span className="font-semibold text-[#00ff88]">Future Plans:</span> {project.improvements}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-[#00f7ff] text-black font-semibold hover:bg-black transition-colors hover:text-white"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-black text-white font-semibold hover:bg-[#00f7ff] transition-colors hover:text-black"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
