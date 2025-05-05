import React from "react";
import bgPic from "../Images/dogBg.jpg";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <>
      <div
        className="min-h-screen flex items-center bg-cover bg-center shadow-lg mb-20"
        style={{ backgroundImage: `url(${bgPic})` }}
      >
        <div className="container mx-auto px-6 sm:px-10 md:px-20 lg:px-40 text-white text-center md:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl mb-3">
            Happy Pet
          </h1>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl mb-7">
            Happy You
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-extralight mb-10 md:mb-20">
            Caring for Pets, Connecting Hearts
          </p>
          <Link to="/contact">
            <button className="text-black text-sm sm:text-base bg-white py-2 px-6 sm:py-3 sm:px-8 rounded-full font-bold hover:bg-blue-300 transition duration-300 ease-in-out">
              Make appointment
            </button>
          </Link>
        </div>
      </div>

      <div id="services" className="px-4 sm:px-10 md:px-20 lg:px-40">
        <Services />
      </div>
      <div id="pricing" className="px-4 sm:px-10 md:px-20 lg:px-40">
        <Pricing />
      </div>
      <div id="testimonials" className="px-4 sm:px-10 md:px-20 lg:px-40">
        <Testimonials />
      </div>
      <div id="contact" className="px-4 sm:px-10 md:px-20 lg:px-40">
        <Contact />
      </div>
    </>
  );
};

export default Home;