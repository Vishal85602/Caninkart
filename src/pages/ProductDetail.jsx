import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import dog1 from '../assets/pngwing.png';
import dog2 from '../assets/pngwing.png';
import dog3 from '../assets/pngwing.png';
import dog4 from '../assets/pngwing.png';

import ContactForm from '../components/contactForm';

const ProductDetail = () => {
  const images = [dog1, dog2, dog3, dog4];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-[#F1FFEF] flex flex-col items-center p-4 sm:p-6 md:p-10 relative">
        {/* Back Button */}
        <button
          className="text-sm text-gray-600 hover:underline absolute top-4 left-4 sm:top-6 sm:left-6 z-10"
          onClick={() => navigate(-1)}
        >
          &larr; BACK
        </button>

        {/* Product Container */}
        <div className="w-full max-w-6xl bg-white rounded-lg p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 border mt-12 sm:mt-16">
          {/* Sidebar Thumbnails */}
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-md cursor-pointer hover:ring-2 ring-gray-400 bg-white p-1 shrink-0"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="col-span-2 flex items-center justify-center bg-white">
            <img
              src={selectedImage}
              alt="Main Product"
              className="w-full max-w-xs sm:max-w-sm h-auto object-contain rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Trixie Classic H Harness for Dogs (Black)
            </h1>

            {/* Paragraph with center alignment and line breaks */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-wide text-center">
              Keep your dog safe and secure with the Trixie classic H-harness. <br />
              Made of high-quality colourful nylon, and you will love its durability. <br />
              The harness has an adjustable bib, neck, and belly straps, <br />
              with easy release side buckles. <br />
              The H shape helps provide full body support to your dog <br />
              as it distributes pressure throughout. <br />
              The best fit for your dog.
            </p>

            <div>
              <h2 className="font-semibold text-gray-800 text-left md:text-left">Key Features:</h2>
              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 mt-2 text-left">
                <li>H shape provides full-body support</li>
                <li>Webbing tape</li>
                <li>Bib, neck, and belly straps</li>
                <li>Fully adjustable chest and belly straps</li>
                <li>Extra thick premium harness</li>
                <li>Perfect comfortable fit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default ProductDetail;
