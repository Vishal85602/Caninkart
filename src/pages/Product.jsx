import React from 'react';
import { useNavigate } from 'react-router-dom';
import img11 from '../assets/pngwing.png';
import ContactForm from '../components/contactForm';

const Product = () => {
  const navigate = useNavigate();
  const productImages = [img11];

  const Productss = Array.from({ length: 28 }, (_, index) => ({
    id: index + 1,
    image: productImages[index % productImages.length],
    name: 'Lounge',
  }));

  return (
    <>
    <div className="bg-[#ecf2e7] py-10 px-20 ">
      <p className="text-center font-semibold text-lg mb-6">Products</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Productss.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow p-4 text-center cursor-pointer hover:ring-2 ring-orange-300"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt="product" className="mx-auto w-24 h-24 object-contain" />
            <p className="mt-2 text-sm">{product.name}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      
    </div>
    <ContactForm />
    </>
  );
};

export default Product;
