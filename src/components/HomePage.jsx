import React from "react";
import { FiSearch, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import hero from '../assets/5dog.png'
import pupy from '../assets/pupy.png'
import contact from '../assets/contact-dog.png'
import img1 from '../assets/categoriy.png'
import img2 from '../assets/pngwing.png'
import img3 from '../assets/dog1.png'
import img4 from '../assets/pngwing.png'
import img5 from '../assets/Ellipse 1.png'
import ContactForm from "./contactForm";

const HomePage = () => {
    const categories = ["WALKING ESSENTIALS", "BEDDINGS", "CAVE HUT", "JACKETS", "TOYS"];
    const images = [img1, img2, img3, img4, img5];

    const topSellers = [
        { name: 'Lounge', img: img1 },
        { name: 'Cozy Bed', img: img2 },
        { name: 'Cave Hut', img: img3 },
        { name: 'Travel Carrier', img: img4 },
    ];
    const products = [
        { name: 'Lounge', img: img1 },
        { name: 'Cozy Bed', img: img2 },
        { name: 'Play Toy', img: img3 },
        { name: 'Warm Jacket', img: img4 },
    ];
    const testimonials = [
        {
            name: 'David',
            city: 'Pune',
            img: img1,
            text: '“My golden retriever, Max, absolutely loves the cozy, top-tiered bed from Caninkart!”',
        },
        {
            name: 'Aarav',
            city: 'Delhi',
            img: img2,
            text: '“Best accessories I’ve ever bought for my pug. High quality and stylish!”',
        },
        {
            name: 'Sneha',
            city: 'Mumbai',
            img: img3,
            text: '“Affordable and premium products. My cat refuses to sleep anywhere else now.”',
        },
        {
            name: 'Ritika',
            city: 'Bangalore',
            img: img4,
            text: '“Caninkart is my go-to for pet gear. Highly recommend for all pet parents.”',
        },
    ];


    return (
        <div className="font-sans text-gray-800">

            {/* Hero Section */}
            <section className="bg-orange-100 md:relative overflow-hidden px-4 py-20 text-center flex flex-col items-center">
                {/* Text Content */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                        WELCOME TO CANINKART
                    </h1>
                    <p className="mb-6 font-semibold text-base sm:text-lg md:text-2xl leading-relaxed">
                        One of India's Leading <span className="text-red-950">Manufacturers and Exporters</span> of pet<br className="hidden sm:block" />
                        accessories and beddings
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md text-sm sm:text-base">
                        Explore Now
                    </button>
                </div>

                {/* Hero Image */}
                <div className="lg:absolute bottom-0 right-70   w-1/2 sm:w-1/3 md:w-[250px] lg:w-[300px] z-0 opacity-70 md:opacity-100 ">
                    <img
                        src={hero}
                        alt="Hero Dogs"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </section>


            {/* Categories */}
            <section className="py-10 text-center">
                <h2 className="text-sm font-semibold text-orange-500 mb-4">🧡 CATEGORY</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-[#ECDDC7] rounded-full px-5 py-4">
                                <img src={images[index]} alt={category} className="h-20 mx-auto" />
                            </div>
                            <p className="mt-2 text-xs font-medium">{category}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Top Sellers */}
            <section className="bg-gray-100 py-10 text-center">
                <h2 className="text-sm font-semibold text-orange-500 mb-4">🔥 TOP SELLERS</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {Array.from({ length: 8 }).map((_, idx) => {
                        const item = topSellers[idx % topSellers.length]; // Repeat items if more than 4
                        return (
                            <div key={idx} className="bg-white p-4 shadow-md rounded-lg">
                                <img src={item.img} alt={item.name} className="mx-auto h-24 object-contain" />
                                <p className="text-xs mt-2 font-medium">{item.name}</p>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* Promo Banner */}
            <div className="bg-white-100 px-5 py-15 shadow-md">
                <section className="bg-blue-100 py-15 px-45  flex flex-col md:flex-row  gap-6 relative max-w-6xl mx-auto rounded-2xl">
                    <div className=" ">
                        <h3 className="font-black text-4xl mb-2">Discover Everything You Need</h3>
                        <p className="text-black mb-3">Everything you need to welcome your new pup home.</p>
                        <button className="bg-pink-400 text-white px-4 py-2 rounded text-sm">Explore Now</button>
                    </div>
                    <div className="absolute right-1 h-150 -top-9">
                        <img src={img3} alt="Shih Tzu" className="h-40 md:h-72" />
                    </div>
                </section>
            </div>

            {/* Products Section */}
            <section className="py-10 bg-gray-100 text-center">
                <h2 className="font-semibold mb-4 text-lg text-orange-500">🛍️ Products</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {Array.from({ length: 12 }).map((_, idx) => {
                        const product = products[idx % products.length]; // Repeat if fewer than 8
                        return (
                            <div key={idx} className="bg-white p-4 shadow rounded">
                                <img src={product.img} alt={product.name} className="mx-auto h-24 object-contain" />
                                <p className="text-xs mt-2 font-medium">{product.name}</p>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* About */}
            <section className="py-5 px-4 bg-[#DEFED2] flex flex-col md:flex-row items-center justify-center gap-15">
                <img src={pupy} alt="About Dog" className="h-66 mt-15" />
                <div>
                    <h2 className="text-sm font-semibold text-orange-500 mb-10 ">🧡 ABOUT</h2>

                    <p className="text-sm max-w-md">
                        As a leading manufacturer and exporter of pet accessories, Caninkart has gained a reputation for producing top-notch pet products that cater to the needs of pets of all shapes and sizes. Caninkart has been dedicated to creating innovative and practical pet products that enhance the lives of pets and their owners.
                    </p>
                    <button className="mt-4 bg-red-500 text-white text-xs px-4 py-2 rounded">READ MORE</button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gray-100 py-10 text-center">
                <h2 className="text-sm  font-semibold text-orange-500 mb-6">🧡 TESTIMONIALS</h2>
                <h3 className="font-black text-xl mb-6">Trusted by Pet Lovers Everywhere</h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-left px-4">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-white p-4 rounded shadow">
                            <p className="text-sm">{item.text}</p>
                            <hr className="border-t mt-2" />
                            <div className="flex items-center mt-3 space-x-2 text-xs font-medium">
                                <img src={item.img} alt={item.name} className="w-6 h-6 rounded-full" />
                                <div className="flex flex-col leading-tight">
                                    <span>{item.name}</span>
                                    <span className="text-gray-500">{item.city}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Contact Section */}
            {/* <section className="py-10 px-4 bg-orange-50 text-center ">
                <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
                <h3 className="text-lg font-bold mb-6">Contact Us</h3>

                <div className="bg-cover bg-center bg-no-repeat h-96 flex items-center  text-white  max-w-5xl mx-auto relative rounded-2xl"
                    style={{ backgroundImage: ` url('src/assets/contact-dog.png')` }}>
                    <div className="absolute top-3 right-5">
                        <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black ">
                            <input className="w-full border p-2 rounded text-black" type="text" placeholder="Your Name" />
                            <input className="w-full border p-2 rounded text-black" type="text" placeholder="Your Contact" />
                            <input className="w-full border p-2 rounded text-black" type="email" placeholder="Your Email" />
                            <textarea className="w-full border p-2 rounded" placeholder="Your Message" rows="3" />
                            <button className="w-full bg-orange-500 text-white py-2 rounded">SEND</button>
                        </form>
                    </div>


                </div>
            </section> */}
         <ContactForm/>



        </div>
    );
};

export default HomePage;
