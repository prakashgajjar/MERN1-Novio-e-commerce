import React, { useContext } from 'react';
import Navbar from '../header/Navbar';
import Menu from '../header/Menu';
import ThemeContext from '../../../ContextProvider';

const About = () => {
  const { show } = useContext(ThemeContext);

  return (
    <div className={`overflow-hidden ${show ? "h-full" : "h-screen"}`}>
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      <div className={`${show ? 'hidden' : 'block'}`}>
        <Menu />
      </div>
      <div className="h-screen flex justify-center items-start">
        {/* Sidebar */}
        <div className="fixed left-32 top-32 w-64">
          <ul className="flex flex-col gap-2">
            <li className="py-4 pl-6 hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-gray-900 cursor-pointer">
              Home
            </li>
            <li className="py-4 pl-6 hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-gray-900 cursor-pointer">
              About
            </li>
            <li className="py-4 pl-6 hover:bg-gray-100 border-l-4 border-transparent hover:border-black text-gray-900 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-[400px] top-32 h-[1000px] w-[2px] bg-gray-300"></div>

        {/* Right Section */}
        <div className="absolute left-[500px] top-32 w-96">
          <h1 className="text-3xl font-semibold text-center mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our website! We are a team of passionate individuals dedicated to providing you with the best products and services. Whether you're here for shopping, tracking orders, or looking to create an account, we are committed to offering a seamless experience.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our mission is simple: <strong>Fashion is Freedom</strong>. We believe that everyone should feel confident in their own skin, and our clothing is designed to do just that. We offer a wide range of styles to cater to your personal taste, ensuring you find something that makes you feel amazing.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">Our Team</h2>
          <p className="text-lg text-gray-700 mb-4">
            We are a group of designers, developers, and customer support specialists working together to create a user-friendly platform. Our goal is to help you discover fashion that suits your needs and express yourself freely.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li>Wide variety of trendy clothing</li>
            <li>Easy-to-use website for browsing and ordering</li>
            <li>Secure payment and fast shipping</li>
            <li>Excellent customer service for all inquiries</li>
          </ul>

          <div className="mt-6">
            <button className="bg-gray-800 text-white py-2 rounded hover:bg-gray-700 w-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
