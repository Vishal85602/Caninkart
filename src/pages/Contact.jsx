import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white py-10 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-orange-500 font-semibold">📍CONTACT</p>
        <h2 className="text-2xl font-bold">Contact Us</h2>
      </div>

      {/* Form and Contact Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-md space-y-4 shadow">
          <h3 className="font-semibold text-lg mb-4">Do You Have Any Questions?</h3>

          {/* Name and Contact in one row on all screen sizes */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 rounded border w-full"
            />
            <input
              type="text"
              placeholder="Your Contact"
              className="p-2 rounded border w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded border w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded border w-full h-28"
          />
          <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700">
            SEND
          </button>
        </div>

        {/* Get in Touch */}
        <div className="bg-gray-100 p-6 rounded-md shadow">
          <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>

          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-orange-600" />
            <strong>Email:</strong> support@caninkart.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaPhone className="text-orange-600" />
            <strong>Phone:</strong> +91 95209 57250
          </p>
          <p className="flex items-start gap-2 mb-4">
            <FaMapMarkerAlt className="text-orange-600 mt-1" />
            <strong>Address:</strong> 2220 Colorado Avenue, 5th Floor, Santa Monica California, USA
          </p>

          <div className="flex gap-4 mt-4 text-xl text-orange-600">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-10">
        <iframe
          title="Caninkart Location"
          className="w-full h-64 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.394351706669!2d78.03218811512935!3d30.316495481775175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bbf6e60c45%3A0x61b36a48fda759a1!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1627887884973!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
