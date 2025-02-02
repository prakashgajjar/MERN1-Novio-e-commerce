import React, { useState, useContext } from 'react';
import Menu from '../header/Menu';
import ThemeContext from '../../../ContextProvider';

const Contact = () => {
  const { show } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`relative w-full min-h-screen bg-[#f5f5f5] text-gray-900 overflow-hidden ${show ? "h-full" : "h-screen"}`}>

      <div className={`z-40 ${show ? 'hidden' : 'block'}`}>
        <Menu />
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl">
          We would love to hear from you! Whether you have a question, suggestion, or just want to say hi.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-full py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Contact Us</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
          Feel free to reach out to us for any inquiries or support. We are here to help you!
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="6"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 px-8 py-3 text-lg font-semibold uppercase border border-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-lg mb-8">
            Don't miss any updates. Follow us on social media and join the Novio community.
          </p>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} Novio. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
