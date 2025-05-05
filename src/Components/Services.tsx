import React, { useState, useEffect } from 'react';
import paw from '../Images/paw.png';
import aboutPic from '../Images/Image-about.webp';
import dogGif from '../Images/dog-gif.gif'
import { Link } from "react-router-dom";
import vaccination from "../Images/vaccine.png";
import sitting from "../Images/pet-bed.png";
import grooming from "../Images/catGroom.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

const Services: React.FC = () => {
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
     

  const pawItems = [
    'All necessary examinations in one comfortable place.',
    'A large list of related services at a reasonable price.',
    'Ratologist, feminologists, cynotogist other specialists.',
  ];

  const stats = [
    {
      number: '4720',
      description: 'Clients in 2023',
    },
    {
      number: '4695',
      description: 'Pets saved',
    },
    {
      number: '1868',
      description: 'Pets gound new homes',
    },
  ]

  return (
    <>
    {/* Services offered */}
    <div className="container mx-auto text-center mb-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold mb-10">Our Pet Care Services</h2>
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 transition"
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
            className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-2 my-20 gap-10">
        {/* Left side */}
        <div className="flex flex-col">
          <h1 className="font-bold text-5xl py-5">
            We Do Our Best to Keep Your Pets Healthy
          </h1>
          <p className="text-gray-700 mb-10 text-2xl font-light">
            Our veterinary clinic has been operating for over 20 years. We have
            successfully cured thousands of pets, from dog and cat to exotic
            pets such as parrots, monkeys, etc.
          </p>

          {/* Paw Icon with Text */}
          <div className="space-y-10">
            {pawItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-5">
                <img
                  src={paw}
                  className="w-10 h-10"
                  alt="paw icon"
                />
                <p className="text-xl font-light text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <div>
            <button className='bg-[#04739F] text-white py-4 px-6 rounded-full font-medium text-xs hover:bg-[#0A4F6D] transition duration-300 ease-in-out mt-10'>
              View Pricing
            </button>
          </div>
        </div>

        {/* Right side */}
        <div>
          <img
            src={aboutPic}
            alt="About Us"
            className="w-full h-full object-cover rounded-lg"
            // style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </div>

       {/* Stats Section */}
      <div className="flex flex-wrap justify-evenly items-center my-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-6xl font-bold text-[#04739F]">{stat.number}</h3>
            <div className="flex space-x-3 items-center pt-5">
              <span className="text-gray-700">-</span>
              <p className="font-light text-gray-700 text-2xl">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Gif */}
      <div className='container mx-auto flex items-center justify-center my-10 pb-10'>
        <img src={dogGif} 
          alt="Dog Gif" 
          className="w-full h-1/3 object-cover rounded-lg"
        />

      </div>
    </>
  );
};

export default Services;