import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo1 from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 text-center text-sm border-t mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-6 text-left">
        <div>
          <img src={logo1} alt="Caninkart" className="h-10 mb-2" />
          <p>
            Caninkart is a highly reputable manufacturer and exporter of pet
            accessories
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Link</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Dog Breed</li>
            <li>Products</li>
            <li>Market Place</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="flex items-center gap-2">
            <FiMail /> support@caninkart.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FiPhone /> +91 95029 57250
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4 text-xl text-orange-600">
        <FaFacebookF className="cursor-pointer hover:text-orange-400" />
        <FaInstagram className="cursor-pointer hover:text-orange-400" />
        <FaYoutube className="cursor-pointer hover:text-orange-400" />
      </div>

      <p className="mt-4 text-xs text-gray-500">
        © 2025 Caninkart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
