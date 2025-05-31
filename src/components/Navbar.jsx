import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Caninkart Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold text-gray-800 tracking-wide hidden sm:inline">Caninkart</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {["home", "product", "about", "blog", "contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-500 transition"
                }
              >
                {item.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="bg-orange-100 p-2 rounded-full hover:bg-orange-200 transition">
            <FiSearch size={18} className="text-gray-800" />
          </button>
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden px-6 pt-2 pb-4 space-y-3 font-medium text-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "block animate-slide-down" : "hidden"
        }`}
      >
        {["home", "product", "about", "blog", "contact"].map((item) => (
          <div key={item}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) =>
                isActive
                  ? "block text-orange-500 font-semibold"
                  : "block hover:text-orange-500 transition"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.toUpperCase()}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
