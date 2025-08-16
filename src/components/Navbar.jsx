

// import React, { useState } from "react";
// import { NavLink } from "react-router";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "About", to: "/about" },
//     { name: "Skills", to: "/skills" },
//     { name: "Projects", to: "/projects" },
//     { name: "Contact", to: "/contact" },
//   ];

//   return (
//     <nav className="fixed w-full z-50 px-5 md:px-10 py-4  bg-black/10 backdrop-blur-md shadow-sm">
//       <div className="flex items-center justify-between">
//         {/* Logo / Website Name */}
//         <h1 className="text-2xl font-bold text-[#8FE6FF] cursor-pointer">
//           Dev_Rafi
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-white">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <NavLink
//                 to={link.to}
//                 className={({ isActive }) =>
//                   `cursor-pointer transition-colors ${
//                     isActive
//                       ? "text-[#8FE6FF]"
//                       : "hover:text-[#8FE6FF] text-white"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//           <li>
//             <a
//               href="/src/assets/RafiCV.pdf"
//               download
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
//             >
//               Resume
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div
//           className="md:hidden text-white text-2xl cursor-pointer"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-white text-xl">
//           {/* Close Icon inside menu */}
//           <FaTimes
//             className="absolute top-6 right-6 text-3xl cursor-pointer"
//             onClick={toggleMenu}
//           />

//           {navLinks.map((link) => (
//             <NavLink
//               key={link.name}
//               to={link.to}
//               onClick={toggleMenu}
//               className={({ isActive }) =>
//                 `cursor-pointer transition-colors ${
//                   isActive
//                     ? "text-[#8FE6FF]"
//                     : "hover:text-[#8FE6FF] text-white"
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           <a
//             href="/src/assets/RafiCV.pdf"
//             // download
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={toggleMenu}
//             className="px-6 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
//           >
//             Resume
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed w-full z-50 px-5 md:px-10 py-4 bg-black/10 backdrop-blur-md shadow-sm"
    >
      <div className="flex items-center justify-between">
        {/* Logo / Website Name */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-[#8FE6FF] cursor-pointer"
        >
          Dev_Rafi
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors ${
                    isActive
                      ? "text-[#8FE6FF]"
                      : "hover:text-[#8FE6FF] text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="https://pdf.ac/meHOxCjI"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.8 }}
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-white text-xl"
          >
            {/* Close Icon inside menu */}
            <motion.div
              whileHover={{ rotate: 90 }}
              className="absolute top-6 right-6 text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              <FaTimes />
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <NavLink
                  to={link.to}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `cursor-pointer transition-colors ${
                      isActive
                        ? "text-[#8FE6FF]"
                        : "hover:text-[#8FE6FF] text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.15 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://pdf.ac/meHOxCjI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="px-6 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;


