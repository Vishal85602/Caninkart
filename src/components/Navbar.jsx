import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Cattkart Logo" className="h-10" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
          <li><Link to="/home" className="hover:text-black">HOME</Link></li>
          <li><Link to="/product" className="hover:text-black">PRODUCT</Link></li>
          <li><Link to="/about" className="hover:text-black">ABOUT</Link></li>
          <li><Link to="/blog" className="hover:text-black">BLOG</Link></li>
          <li><Link to="/contact" className="hover:text-black">CONTACT</Link></li>
        </ul>

        {/* Search and Hamburger Icon */}
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-2 rounded-full cursor-pointer">
            <FiSearch size={18} className="text-black" />
          </div>
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 text-sm font-semibold text-gray-800">
          <li><Link to="/home" onClick={() => setIsOpen(false)}>HOME</Link></li>
          <li><Link to="/product" onClick={() => setIsOpen(false)}>PRODUCT</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>BLOG</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
