import React from "react";
import { Link } from "react-router-dom";
import blogImg from '../assets/dogb1.jpg';

const blogs = [
  { id: 1, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 2, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 3, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 4, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 5, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 6, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 7, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 8, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 9, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 10, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 11, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 12, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 13, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 14, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 15, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 16, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 17, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 18, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 19, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
  { id: 20, title: "Explore Caninkart’s Range of Pet Products", date: "May 14, 2025", author: "Tatjana", tag: "Collar", image: blogImg },
];

const Blog = () => {
  return (
    <div className="bg-gray-100 py-8 px-10">
      <h2 className="text-center text-xl font-bold mb-6">Our Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-3 rounded shadow">
            <span className="inline-block mt-1 text-xs bg-gray-200 px-2 py-1 rounded">{blog.tag}</span>

            <Link to={`/blog/${blog.id}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-60 h-48 object-cover cursor-pointer mt-2 rounded"
              />
            </Link>

            <p className="text-xs text-gray-500 mt-1">{blog.date} · By {blog.author}</p>

            <Link
              to={`/blog/${blog.id}`}
              className="text-sm font-semibold mt-2 block hover:text-orange-500 cursor-pointer"
            >
              {blog.title}
            </Link>
          </div>
        ))}
      </div>

      <section className="py-10 px-4 bg-orange-50 text-center">
        <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
        <h3 className="text-lg font-bold mb-6">Contact Us</h3>

        <div
          className="bg-cover bg-center bg-no-repeat h-96 flex items-center text-white max-w-5xl mx-auto relative rounded-2xl"
          style={{ backgroundImage: `url('src/assets/contact-dog.png')` }}
        >
          <div className="absolute top-3 right-5">
            <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black">
              <input
                className="w-full border p-2 rounded text-black"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full border p-2 rounded text-black"
                type="text"
                placeholder="Your Contact"
              />
              <input
                className="w-full border p-2 rounded text-black"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="w-full border p-2 rounded"
                placeholder="Your Message"
                rows="3"
              />
              <button className="w-full bg-orange-500 text-white py-2 rounded">SEND</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
