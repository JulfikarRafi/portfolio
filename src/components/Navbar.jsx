// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navLinks = [
//     { name: "Home", to: "home" },
//     { name: "About", to: "about" },
//     { name: "Skills", to: "skills" },
//     { name: "Projects", to: "projects" },
//     { name: "Contact", to: "contact" },
//   ];

//   return (
//     <nav className="fixed w-full z-50 px-5 md:px-10 py-4 bg-black/40 backdrop-blur-md border-b border-white/10">
//       <div className="flex items-center justify-between">
//         {/* Logo / Website Name */}
//         <h1 className="text-2xl font-bold text-[#8FE6FF] cursor-pointer">
//           MyPortfolio
//         </h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-white">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <Link
//                 to={link.to}
//                 smooth={true}
//                 duration={500}
//                 className="cursor-pointer hover:text-[#8FE6FF] transition-colors"
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//           <li>
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
//             >
//               Resume
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-white text-xl">
//             <FaTimes 
//       className="absolute top-6 right-6 text-3xl cursor-pointer" 
//       onClick={toggleMenu} 
//     />
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.to}
//               smooth={true}
//               duration={500}
//               onClick={toggleMenu}
//               className="cursor-pointer hover:text-[#8FE6FF] transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
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
    <nav className="fixed w-full z-50 px-5 md:px-10 py-4  bg-black/10 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo / Website Name */}
        <h1 className="text-2xl font-bold text-[#8FE6FF] cursor-pointer">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
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
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-white text-xl">
          {/* Close Icon inside menu */}
          <FaTimes
            className="absolute top-6 right-6 text-3xl cursor-pointer"
            onClick={toggleMenu}
          />

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
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
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="px-6 py-2 rounded-lg border border-[#8FE6FF] text-[#8FE6FF] hover:bg-[#8FE6FF] hover:text-black transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

