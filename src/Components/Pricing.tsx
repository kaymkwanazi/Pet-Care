import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IoCheckmark, IoClose } from "react-icons/io5";

interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  id: number;
  name: string;
  price: number;
  features: Feature[];
}

const Pricing: React.FC = () => {
  const prices: Plan[] = [
    {
      id: 1,
      price: 800,
      name: "Initial Checkup",
      features: [
        { name: "Checkup by veterinarian", included: true },
        { name: "Care recommendations", included: true },
        { name: "Dental Care", included: false },
        { name: "Laboratory tests", included: false },
      ],
    },
    {
      id: 2,
      price: 950,
      name: "Full Checkup",
      features: [
        { name: "Checkup by veterinarian", included: true },
        { name: "Checkup by dentist", included: true },
        { name: "Laboratory tests", included: true },
        { name: "Prevention Vaccination", included: false },
      ],
    },
    {
      id: 3,
      price: 500,
      name: "Vaccination",
      features: [
        { name: "3 available features", included: true },
        { name: "10 requests per month", included: true },
        { name: "General support", included: true },
        { name: "Personal consultations", included: true },
        { name: "Pet grooming services", included: true },
      ],
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? prices.length - 2 : prevIndex - 1
    );
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 2 >= prices.length ? 0 : prevIndex + 1
    );
  };

  const visiblePrices: Plan[] = [];
  for (let i = 0; i < 2; i++) {
    const cardIndex = (startIndex + i) % prices.length;
    visiblePrices.push(prices[cardIndex]);
  }

  return (
    <div className="container mx-auto my-10 py-10 grid cols-1 md:grid-cols-2 gap-28">
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Pricing Plans and Our Services</h1>
            <p className="font-light text-lg mb-10">
                We offer our clients all the necessary services for the health of their pets.
                Here you will find attractive prices for all types of services. We work 7 days a week but
                recommend making an appointment in advance.
            </p>
        </div>
     
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-90px] top-1/2 transform -translate-y-1/2 bg-[#04739F] text-white p-3 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Pricing Cards */}
        <div className="flex gap-5 justify-center items-center">
          {visiblePrices.map((price) => (
            <div
              key={price.id}
              className="flex flex-col items-center justify-between min-w-[300px] max-w-[300px] h-[400px] bg-slate-100 p-5 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold py-5">R{price.price}</h2>
              <p className="text-gray-500">{price.name}</p>
              <ul className="mt-5 space-y-2 py-5">
                {price.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.included ? (
                      <IoCheckmark className="text-[#04739F] mr-2" />
                    ) : (
                      <IoClose className="text-gray-500 mr-2" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-gray-700"
                          : "text-gray-400 line-through"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#04739F] px-5 py-2 rounded-full text-white">
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-[-90px] top-1/2 transform -translate-y-1/2 bg-[#04739F] text-white p-3 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pricing;