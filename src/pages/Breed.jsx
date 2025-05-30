import React from "react";
import lab1 from '../assets/dogb1.png' // Ensure the image exists at this path

const dogs = [
  {
    number: "01",
    image: lab1,
    description:`Labrador
Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`
  },
  {
    number: "02",
    image: lab1,
    description: `Labrador
Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`
  },
  {
    number: "03",
    image: lab1,
    description: `Labrador
Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`
  },
  {
    number: "04",
    image: lab1,
    description:`Labrador
Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`
  }, 
  {
    number: "05",
    image: lab1,
    description:`Labrador
Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`
  }, 
  {
    number: "06",
    image: lab1,
    description:`Labrador
Labradors are some of the most popular dogs around the world. Labradors are known for their loving and friendly personalities, intelligence, and loyalty. They are often used as service dogs, therapy dogs, and for companionship. Labradors are incredibly intelligent, making them great for training and teaching tricks. Labrador comes in three different colors – white, black, and chocolate – and have a unique double coat which sheds seasonally. Labrador is also one of the most popular breeds in India.`
  },  
];

const DogSection = ({ number, image, description, reverse }) => (
  <div className={`grid md:grid-cols-2 gap-6 items-center py-10  ${reverse ? "md:flex-row-reverse" : ""}`}>
    {!reverse && (
      <img src={image} alt="Labrador" className="rounded w-full max-w-md mx-auto md:mx-0" />
    )}

    <div className="space-y-3 px-4">
      <h1 className="text-5xl text-left font-bold text-[#CDDCEA]">{number}</h1>
      <h2 className="text-4xl font-[Fredoka One] text-black">Labrador</h2>
      <p className="font-[Poppins]  text-sm text-black leading-relaxed">{description}</p>
    </div>
<div>
    {reverse && (
      <img src={image} alt="Labrador" className="rounded-xl w-full max-w-md mx-auto md:mx-0" />
    )}
  </div>
  </div>
);

function App() {
  return (
    <div className="bg-[#f9f5f3] text-gray-800 font-sans px-4 py-10">
      <h2 className="text-center text-orange-500 text-sm font-semibold mb-10">
        🐾 KNOW ABOUT DOG BREEDS
      </h2>
      <div className="max-w-7xl mx-auto space-y-10">
        {dogs.map((dog, idx) => (
          <DogSection
            key={idx}
            number={dog.number}
            image={dog.image}
            description={dog.description}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
