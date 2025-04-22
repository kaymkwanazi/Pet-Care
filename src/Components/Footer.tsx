import React from 'react';
import logo from '../Images/vetLogo.avif';
import { FaArrowAltCircleUp, FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { IoIosArrowDropup, IoIosArrowUp } from 'react-icons/io';

const Footer: React.FC = () => {
  const scrollToTop =() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="size-44 mb-3" />
        </div>

        {/* Navigation Section */}
        <ul className="flex flex-col items-center space-y-2">
          <h1 className="text-lg font-bold underline">Navigation</h1>
          <li>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold underline mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebookSquare size={28} className="text-blue-700" />
            <FaInstagramSquare size={28} className="text-pink-600" />
            <FaYoutubeSquare size={28} className="text-red-600" />
          </div>
        </div>

        {/* Back to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="text-gray-500 rounded-full"
            >
            <IoIosArrowUp size={36} className="text-gray-500" />
            </button>
        </div>
      </div>

      {/* Blue Line and Copyright */}
      <div className="flex flex-col items-center mb-3">
        <hr className="w-full border-t-1 border-blue-400 mb-3" />
        <p className="text-gray-600 text-sm text-center">
          © 2025 Happy Pet Clinic. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;