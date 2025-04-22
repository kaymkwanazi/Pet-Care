import React, { useState } from "react";
import bgPic from "../Images/dogBg.jpg";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import NavBar from "../Components/NavBar";
import About from "../Components/Services";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import Contact from "./Contact";
import Services from "../Components/Services";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div
        className="h-screen flex items-center bg-cover shadow-lg mb-20"
        style={{ backgroundImage: `url(${bgPic})` }}
      >
        <div className="container mx-auto px-40 text-white">
          <h1 className="font-bold text-2xl md:text-6xl mb-3">Happy Pet</h1>
          <h1 className="font-bold text-2xl md:text-6xl mb-7">Happy You</h1>
          <p className="text-2xl text-gray-200 font-extralight mb-20">
            Caring for Pets, Connecting Hearts
          </p>
          <button className="text-black text-xs bg-white p-4 mx-20 rounded-full font-bold hover:bg-blue-300 transition duration-300 ease-in-out">
            Make appointment
          </button>
        </div>
      </div>

      <div id="services" className="my-20">
            <Services />
      </div>
     <div id="pricing" className="my-20">
            <Pricing />
      </div>
      
     <div id="testimonials" className="my-20">
            <Testimonials />
      </div>
      
{/*      <div id="contact">
            <Contact />
      </div> */}
      <Footer />
    </>
  );
};
 
export default Home;