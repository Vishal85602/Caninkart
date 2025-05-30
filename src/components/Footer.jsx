import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo1 from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 md:px-10 border-t mt-10 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between  gap-8 text-left ">
        {/* Logo & Description */}
        <div className="flex-1 ">
          <img src={logo1} alt="Caninkart" className="h-10 mb-2 border " />
          <p className="text-gray-700 leading-relaxed">
            Caninkart is a highly reputable manufacturer and exporter of pet accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2 text-black">Quick Links</h4>
          <ul className="space-y-1 text-gray-600">
            <li>
    <Link to="/" className="hover:text-orange-500 cursor-pointer">Home</Link>
  </li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Dog Breed</li>
            <li className="hover:text-orange-500 cursor-pointer">Products</li>
            <Link to="/marketplace" className="hover:text-orange-500 cursor-pointer">Market Place</Link>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2 text-black">Legal</h4>
          <ul className="space-y-1 text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-500 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h4 className="font-semibold mb-2 text-black">Contact Us</h4>
          <p className="flex items-center gap-2 text-gray-700">
            <FiMail className="text-orange-600" /> support@caninkart.com
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-700">
            <FiPhone className="text-orange-600" /> +91 95029 57250
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-6 text-xl text-orange-600">
        <FaFacebookF className="cursor-pointer hover:text-orange-400 transition" />
        <FaInstagram className="cursor-pointer hover:text-orange-400 transition" />
        <FaYoutube className="cursor-pointer hover:text-orange-400 transition" />
      </div>

      {/* Copyright */}
      <p className="mt-6 text-center text-xs text-gray-500">
        © 2025 Caninkart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
