import React, { useRef } from "react";
import bgPic from "../Images/dogBg.jpg";
import { Link } from "react-router-dom";
import vaccination from "../Images/vaccine.png";
import sitting from "../Images/pet-bed.png";
import grooming from "../Images/catGroom.png";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import NavBar from "../Components/NavBar";
import About from "../Components/About";

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

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

      <div className="container mx-auto px-4 text-center mb-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold mb-10">Our Pet Care Services</h2>
        <div className="relative w-full overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full hover:bg-gray-200 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Scrollable Grid */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-10 scrollbar-relative w-full overflow-hidden scroll-smooth justify-center items-center py-5"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-between min-w-[300px] max-w-[300px] h-[400px] bg-slate-100 p-5 rounded-lg shadow-lg">
              <img
                src={vaccination}
                alt="Pet Vaccination"
                className="w-20 h-20 mb-4"
              />
              <h3 className="font-semibold text-lg">Pet Vaccination</h3>
              <p className="text-gray-700 mt-4 text-center">
                Our veterinary clinic offers vaccinations for your pets. We use
                only certified vaccines and check allergic reactions.
              </p>
              <Link
                to="/about"
                className="text-sm font-bold mt-auto hover:underline"
              >
                Read More <FaArrowRightLong className="inline" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center justify-between min-w-[300px] max-w-[300px] h-[400px] bg-slate-100 p-5 rounded-lg shadow-lg">
              <img
                src={sitting}
                alt="Pet Sitting"
                className="w-20 h-20 mb-4"
              />
              <h3 className="font-semibold text-lg">Pet Sitting</h3>
              <p className="text-gray-700 mt-4 mb-5 text-center">
                We provide grooming services to keep your pets clean and
                healthy.
              </p>
              <Link
                to="/about"
                className="text-sm font-bold mt-auto hover:underline"
              >
                Read More <FaArrowRightLong className="inline" />
              </Link>
            </div>

            {/* Card 3 */}
            <div>
              <div className="flex flex-col items-center justify-between min-w-[300px] max-w-[300px] h-[400px] bg-slate-100 p-5 rounded-lg shadow-lg">
                <img
                  src={grooming}
                  alt="Pet Grooming"
                  className="w-20 h-20 mb-4"
                />
                <h3 className="font-semibold text-lg">Pet Grooming</h3>
                <p className="text-gray-700 mt-4 text-center">
                  Our veterinary clinic offers vaccinations for your pets. We
                  use only certified vaccines and check allergic reactions.
                </p>
                <Link
                  to="/about"
                  className="text-sm font-bold mt-auto hover:underline"
                >
                  Read More <FaArrowRightLong className="inline" />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            {/* <div>
              <div className="flex flex-col items-center justify-between min-w-[300px] max-w-[300px] h-[400px] bg-slate-100 p-5 rounded-lg shadow-lg">
                <img
                  src={grooming}
                  alt="Pet Grooming"
                  className="w-20 h-20 mb-4"
                />
                <h3 className="font-semibold text-lg">Pet Grooming</h3>
                <p className="text-gray-700 mt-4 text-center">
                  Our veterinary clinic offers vaccinations for your pets. We
                  use only certified vaccines and check allergic reactions.
                </p>
                <Link
                  to="/about"
                  className="text-sm font-bold mt-auto hover:underline"
                >
                  Read More <FaArrowRightLong className="inline" />
                </Link>
              </div>
            </div> */}
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
    </>
  );
};

export default Home;