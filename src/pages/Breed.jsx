import React from 'react';
import { FaPaw } from 'react-icons/fa';
import img10 from '../assets/dogb1.png'

const dogs = [
  { id: 1, image: img10 },
  { id: 2, image: img10 },
  { id: 3, image: img10 },
  { id: 4, image: img10 },
  { id: 5, image: img10 },
  { id: 6, image: img10 },
];

const Breed = () => {
  return (
    <section className="bg-[#FAF4ED] py-16 px-4 md:px-20 text-gray-800">
      {/* Heading */}
      <div className="text-center text-orange-500 font-semibold uppercase flex items-center justify-center gap-2 mb-10">
        <FaPaw /> Know About Dog Breeds
      </div>

      {/* Dog Cards */}
      {dogs.map((dog, index) => (
        <div
          key={dog.id}
          className={`grid md:grid-cols-2 gap-10 mb-16 items-center ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <img src={dog.image} alt={`Dog ${index + 1}`} className="w-full max-w-sm mx-auto rounded-xl" />

          <div>
            <h2 className="text-blue-100 text-4xl font-bold mb-2 opacity-40">{`0${index + 1}`}</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Labrador</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Labradors are some of the most popular dogs around the world. Labradors are known for their loving and
              friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and
              for companionship. Labradors are incredibly intelligent, making them great for training and teaching
              tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double
              coat which sheds seasonally. Labrador is also one of the most popular breeds in India.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Breed;
