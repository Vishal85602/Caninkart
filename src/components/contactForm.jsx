import React from 'react';
import dog from "../assets/dogonGrass.png"

const ContactForm = () => {
  return (
    <section className="py-10 px-8 bg-[#FDFDFD] text-center">
      <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
      <h3 className="text-lg font-bold mb-6">Contact Us</h3>

      <div
        className="w-full bg-cover bg-center bg-no-repeat py-20 px-4 rounded-2xl"
        // style={{ backgroundImage: `url('/src/assets/dogonGrass.png')` }}
        style={{ backgroundImage: `url('${dog}')` }}
      >
        <div className="max-w-7xl mx-auto flex justify-end">
          <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black">
            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full border p-2 rounded"
              type="text"
              placeholder="Your Contact"
            />
            <input
              className="w-full border p-2 rounded"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Your Message"
              rows="3"
            />
            <button className="w-full bg-orange-500 text-white py-2 rounded">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
