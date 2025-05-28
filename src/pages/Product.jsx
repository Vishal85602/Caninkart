import React from 'react';
import { useNavigate } from 'react-router-dom';
import img11 from '../assets/pngwing.png';

const Product = () => {
  const navigate = useNavigate();
  const productImages = [img11];

  const Productss = Array.from({ length: 28 }, (_, index) => ({
    id: index + 1,
    image: productImages[index % productImages.length],
    name: 'Lounge',
  }));

  return (
    <div className="bg-[#ecf2e7] py-10 px-4">
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
      <section className="py-10 px-4 bg-orange-50 text-center">
        <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
        <div
          className="bg-cover bg-center bg-no-repeat h-96 flex items-center text-white max-w-5xl mx-auto relative rounded-2xl"
          style={{ backgroundImage: `url('src/assets/contact-dog.png')` }}
        >
          <div className="absolute top-3 right-5">
            <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black">
              <input className="w-full border p-2 rounded" type="text" placeholder="Your Name" />
              <input className="w-full border p-2 rounded" type="text" placeholder="Your Contact" />
              <input className="w-full border p-2 rounded" type="email" placeholder="Your Email" />
              <textarea className="w-full border p-2 rounded" placeholder="Your Message" rows="3" />
              <button className="w-full bg-orange-500 text-white py-2 rounded">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
