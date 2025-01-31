import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8 px-6 md:px-12 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-wide">Novio</h2>
          <p className="text-sm text-gray-400 mt-1">Fashion is Freedom</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="social-icon"><FaXTwitter /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaFacebookF /></a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right mt-4 md:mt-0 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Novio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
