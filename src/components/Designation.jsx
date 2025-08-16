




// import React from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// const Designation = () => {
//   const photoUrl = "https://i.ibb.co.com/PZBSDGm2/my-img.png"; // replace with your photo

//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-20 overflow-hidden bg-black"
//     >
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-black z-0"></div>

//       {/* Animated soft neon circles */}
//       <div className="absolute inset-0">
//         <span
//           className="absolute w-72 h-72 bg-[#8FE6FF]/20 rounded-full top-10 left-10"
//           style={{
//             animation: "pulse 6s ease-in-out infinite",
//           }}
//         ></span>
//         <span
//           className="absolute w-96 h-96 bg-[#FF6FD8]/20 rounded-full bottom-20 right-20"
//           style={{
//             animation: "pulse 6s ease-in-out infinite",
//           }}
//         ></span>
//       </div>

//       {/* Keyframes for pulse */}
//       <style>
//         {`
//           @keyframes pulse {
//             0%, 100% { transform: scale(1); opacity: 0.3; }
//             50% { transform: scale(1.2); opacity: 0.6; }
//           }
//         `}
//       </style>

//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start md:justify-between">
//         {/* Text */}
//         <div className="text-center md:text-left md:w-2/3 space-y-4">
//           <h2 className="text-[#8FE6FF] text-3xl md:text-5xl font-bold">
//             Julfikar Al Rafi
//           </h2>

//           <motion.div
//             className="text-white/90 text-xl md:text-2xl font-medium mt-2"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             <TypeAnimation
//               sequence={[
//                 "Frontend Developer",
//                 2000,
//                 "React Developer",
//                 2000,
//                 "UI/UX Enthusiast",
//                 2000,
//               ]}
//               speed={50}
//               style={{ display: "inline-block" }}
//               repeat={Infinity}
//             />
//           </motion.div>

//           <motion.p
//             className="text-white/70 max-w-md mt-4"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.8, duration: 1 }}
//           >
//             Passionate about building responsive and interactive web
//             experiences. Specialized in React, Tailwind CSS, and modern
//             frontend technologies.
//           </motion.p>
//         </div>

//         {/* Photo */}
//         <motion.div
//           className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           <img
//             src={photoUrl}
//             alt="Julfikar Al Rafi"
//             className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-[#8FE6FF] object-cover shadow-xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Designation;




import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Designation = () => {
  const photoUrl = "https://i.ibb.co.com/PZBSDGm2/my-img.png"; // replace with your photo

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-0 px-10"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a] to-black z-0"></div>

      {/* Floating neon circles */}
      <div className="absolute inset-0">
        {/* Circle 1 */}
        <span
          className="absolute w-72 h-72 bg-[#8FE6FF]/20 rounded-full top-10 left-10"
          style={{
            animation: "float1 15s linear infinite",
          }}
        ></span>
        {/* Circle 2 */}
        <span
          className="absolute w-96 h-96 bg-[#FF6FD8]/20 rounded-full bottom-20 right-20"
          style={{
            animation: "float2 20s linear infinite",
          }}
        ></span>
        {/* Circle 3 */}
        <span
          className="absolute w-60 h-60 bg-[#FFD86F]/20 rounded-full top-1/2 left-1/4"
          style={{
            animation: "float3 18s linear infinite",
          }}
        ></span>
        {/* Circle 4 */}
        <span
          className="absolute w-80 h-80 bg-[#6FFFB0]/20 rounded-full bottom-1/3 right-1/3"
          style={{
            animation: "float4 22s linear infinite",
          }}
        ></span>
      </div>

      {/* Keyframes for floating animations */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-30px) translateX(20px); opacity: 0.6; }
            100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          }
          @keyframes float2 {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(40px) translateX(-30px); opacity: 0.6; }
            100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          }
          @keyframes float3 {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(-25px) translateX(15px); opacity: 0.6; }
            100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          }
          @keyframes float4 {
            0% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            50% { transform: translateY(35px) translateX(-20px); opacity: 0.6; }
            100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          }
        `}
      </style>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start md:justify-between">
        {/* Text */}
        <div className="text-center md:text-left md:w-2/3 space-y-4">
          <h2 className="text-[#8FE6FF] text-3xl md:text-6xl font-bold">
            Julfikar Al Rafi
          </h2>

          <motion.div
            className="text-white/90 text-xl md:text-3xl font-medium mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "MERN stack Developer",
                2000,
                "Web Developer",
                2000,
                "React Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="text-white/70 max-w-md mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Passionate about building responsive and interactive web
            experiences. Specialized in React, Tailwind CSS, and modern
            frontend technologies.
          </motion.p>
        </div>

        {/* Photo */}
        <motion.div
          className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src={photoUrl}
            alt="Julfikar Al Rafi"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-[#8FE6FF] object-cover shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Designation;

