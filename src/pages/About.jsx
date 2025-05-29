import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTimes, FaPaw } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import pupy from '../assets/pupy.png';
import img6 from '../assets/doga1.png';
import img7 from '../assets/dogaa.png'
import img8 from '../assets/doga3.png';
import img9 from '../assets/doga4.png'
import ContactForm from '../components/contactForm';

const CaninkartHome = () => {
  return (
    
    <div className="font-sans text-gray-700 bg-[#DEFED2] ">
      {/* ABOUT SECTION */}

          {/* <h2 className="text-sm font-semibold  bg-[#DEFED2] text-orange-500 text-center  ">🧡 ABOUT</h2> */}
      <div className=''>
        <h2 className="text-sm font-semibold  text-orange-500 text-center  py-2 ">🧡 ABOUT</h2>
        <section className="py-5 px-4  flex flex-col md:flex-row items-center justify-center gap-15">
        <img src={pupy} alt="About Dog" className="h-70 mt-" />
        <div>
          <p className="text-sm max-w-md">
            As a leading manufacturer and exporter of pet accessories, Caninkart has gained a reputation for producing top-notch pet products that cater to the needs of pets of all shapes and sizes. Caninkart has been dedicated to creating innovative and practical pet products that enhance the lives of pets and their owners.
          </p>
          <button className="mt-4 bg-red-500 text-white text-xs px-4 py-2 rounded">READ MORE</button>
        </div>
      </section>

      </div>
      {/* QUOTE SECTION */}
      <section className="      " >
        <div className="">
          <img src={img9} className='w-full h-120 ' />
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="bg-lime-100 py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2  items-center">
          <img src={img6} alt="Dog" className="w-120  object-cover" />
          <div>
            <p className="text-sm md:text-base text-black ">
              
              As a pet owner, the quality and safety of the accessories and pet products you use for your pet is a top priority. When it comes to pet accessories, you want to be sure you are using only the best and most reliable products. That is why it is important to look for pet accessories made in India. Indian-made pet accessories provide a variety of benefits for pet owners. Caninkart pet accessories are the best and offer an even higher level of quality, making them an ideal choice for pet owners.
              As a pet owner, the quality and safety of the accessories and pet products you use for your pet is a top priority... [trimmed for brevity]
            </p>
          </div>
        </div>
        <div className="mt-10   gap-10 items-center relative">
          <div className="flex  gap-4 justify-center md:justify-end">
            <img src={img7} alt="Dog" className="w-40 h-40 rounded-full object-cover md:absolute -top-5 right-30 " />
            <img src={img8} alt="Dog" className="w-35 h-35 rounded-full object-cover md:absolute top-10 right-100" />
          </div>
          <p className="text-sm md:text-base text-black max-w-2xl">
          As a pet owner, the quality and safety of the accessories and pet products you use for your pet is a top priority. When it comes to pet accessories, you want to be sure you are using only the best and most reliable products. That is why it is important to look for pet accessories made in India. Indian-made pet accessories provide a variety of benefits for pet owners. Caninkart pet accessories are the best and offer an even higher level of quality, making them an ideal choice for pet owners.
          As a pet own<br/> Pet owners should always consider Caninkart pet accessories for their pets... [trimmed for brevity]
          </p>
          
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactForm />
    </div>
  );
};

export default CaninkartHome;
