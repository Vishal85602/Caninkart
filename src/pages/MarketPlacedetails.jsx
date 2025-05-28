import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const cityNames = {
  1: "Amritsar",
  2: "Ludhiana",
  3: "Jalandhar",
  4: "Delhi",
  5: "Mumbai",
  6: "Chennai",
  7: "Bengaluru",
  8: "Kolkata",
  9: "Hyderabad",
  10: "Pune",
  11: "Ahmedabad",
  12: "Jaipur",
  13: "Surat",
  14: "Bhopal",
  15: "Chandigarh",
  16: "Nagpur",
  17: "Indore",
  18: "Patna",
  19: "Ranchi",
  20: "Guwahati",
  21: "Noida",
  22: "Gurgaon",
  23: "Varanasi",
  24: "Lucknow",
};

function MarketPlacedetails() {
  const { cityId } = useParams();
  const navigate = useNavigate();
  const city = cityNames[cityId];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            CANINKART MANUFACTURERS IN {city?.toUpperCase()}
          </h1>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-md"
        >
          ← Back
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl text-gray-700">
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Caninkart in {city} stands out as a top dog collar manufacturer, offering quality, style, and comfort. With innovative designs and durable materials, we ensure your pet gets the best.
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-10">
          Discover why pet owners across India choose Caninkart. From attention to detail to customer satisfaction, we’re dedicated to excellence in every collar we create.
        </p>

        {/* Image & Description */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-base md:text-lg leading-relaxed">
              Our collars are crafted with love and built to last. Whether you're after comfort, functionality, or style — we’ve got you covered in {city}.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/corgi.jpg"
              alt="Corgi dog"
              className="rounded-lg shadow-lg w-full max-w-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="px-4 pb-10 max-w-4xl mx-auto text-gray-700">
        <p className="text-base md:text-lg leading-relaxed">
          This is the detailed page for <strong>{city}</strong>. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus nostrum vitae porro aspernatur earum iste aliquam nesciunt maiores repellendus magni ducimus magnam incidunt cumque, quae molestias doloribus libero quas?
        </p>
      </div>
    </div>
  );
}

export default MarketPlacedetails;
