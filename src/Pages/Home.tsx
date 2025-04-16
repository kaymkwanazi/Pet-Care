import React, { useState } from "react";
import bgPic from "../Images/dogBg.jpg";
import { Link } from "react-router-dom";
import vaccination from "../Images/vaccine.png";
import sitting from "../Images/pet-bed.png";
import grooming from "../Images/catGroom.png";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const Home: React.FC = () => {
  const cards: { id: number; title: string; description: string; image: string }[] = [
    {
      id: 1,
      title: "Pet Vaccination",
      description:
        "Our veterinary clinic offers vaccinations for your pets. We use only certified vaccines and check allergic reactions.",
      image: vaccination,
    },
    {
      id: 2,
      title: "Pet Sitting",
      description:
        "We provide grooming services to keep your pets clean and healthy.",
      image: sitting,
    },
    {
      id: 3,
      title: "Pet Grooming",
      description:
        "Our veterinary clinic offers vaccinations for your pets. We use only certified vaccines and check allergic reactions.",
      image: grooming,
    },
    {
      id: 4,
      title: "Pet Adoption",
      description:
        "If you want to adopt a pet, our veterinary cinic will help you determine its condition. We also can help with choosing a pet.",
      image: grooming,
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const scrollLeft = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 3 : prevIndex - 1
    );
  };
 
  // Function to handle right button click
  const scrollRight = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 >= cards.length ? 0 : prevIndex + 1
    );
  };
  const visibleCards: { id: number; title: string; description: string; image: string }[] = [];
  for (let i = 0; i < 3; i++) {
    const cardIndex = (startIndex + i) % cards.length;
    visibleCards.push(cards[cardIndex]);
  }
 
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
 
      <div className="container mx-auto text-center mb-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold mb-10">Our Pet Care Services</h2>
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronLeft />
          </button>
 
          {/* Card Grid (No Scrollbar) */}
          <div className="flex gap-10 justify-center items-center py-5">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col items-center justify-between min-w-[300px] max-w-[300px] h-[400px] bg-slate-100 p-5 rounded-lg shadow-lg"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-20 mb-4"
                />
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-gray-700 mt-4 text-center font-light">
                  {card.description}
                </p>
                <Link
                  to="/about"
                  className="text-sm font-bold mt-auto hover:underline"
                >
                  Read More <FaArrowRightLong className="inline" />
                </Link>
              </div>
            ))}
          </div>
 
          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <About />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};
 
export default Home;