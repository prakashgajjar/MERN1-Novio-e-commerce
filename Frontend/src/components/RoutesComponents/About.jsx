import React, { useContext } from 'react';
import Menu from '../header/Menu';
import ThemeContext from '../../../ContextProvider';

const About = () => {
  const { show } = useContext(ThemeContext);

  return (
    <div className={` relative w-full min-h-screen bg-[#f5f5f5] text-gray-900 overflow-hidden overflow-hidden`}>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">
          Fashion is Freedom
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-3xl">
          Elevate your style, express your soul, and wear confidence like never before.
        </p>
        <p className="mt-6 text-lg font-semibold">Developed by Prakash Suthar</p> {/* Your name added here */}
        <button className="mt-6 px-8 py-3 text-lg font-semibold uppercase border border-white hover:bg-white hover:text-gray-900 transition">
          Discover More
        </button>
      </section>
      <section className="w-full py-20 px-6 md:px-16 bg-white text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Our Story</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
          Novio was founded with a mission: to make fashion an extension of your personality. 
          We design clothing that blends luxury with authenticity—crafted for those who dare to stand out.
        </p>
        <p className="mt-6 text-lg font-semibold">Developed by Prakash Suthar</p> {/* Your name added here */}
      </section>
      <section className="w-full py-20 px-6 md:px-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Our Mission</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-relaxed">
          Our philosophy is simple: Fashion should be fearless. We craft timeless pieces that embody confidence, sophistication, and individuality.
        </p>
        <div className="flex justify-center mt-8 gap-6">
          <div className="p-6 border border-gray-400 rounded-lg hover:bg-gray-200 transition">
            <h3 className="text-xl font-semibold">Timeless Elegance</h3>
            <p className="mt-2 text-gray-700">Classic designs that never fade.</p>
          </div>
          <div className="p-6 border border-gray-400 rounded-lg hover:bg-gray-200 transition">
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="mt-2 text-gray-700">Luxury fabrics, perfect craftsmanship.</p>
          </div>
          <div className="p-6 border border-gray-400 rounded-lg hover:bg-gray-200 transition">
            <h3 className="text-xl font-semibold">Confidence Redefined</h3>
            <p className="mt-2 text-gray-700">Wear your personality boldly.</p>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-6 md:px-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wide">Join the Revolution</h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Experience fashion without limits. Follow us, shop our collections, and make a statement.
        </p>
        <button className="mt-6 px-8 py-3 text-lg font-semibold uppercase border border-white hover:bg-white hover:text-black transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};
export default About;
