import React, { useState } from 'react'
import adonis from '../Images/Adonis.jpg'
import goldenPuppy from '../Images/golden-puppy.gif'
import parrot from '../Images/parrot.jpg'
import hamster from '../Images/hamster.jpg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import paw from '../Images/bluepaw.webp'

interface Testimonial {
    id: number;
    name: string;
    text: string;
    image: string;
    age: string;
}

const Testimonials:React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: "Adonis",
            text: "“Many thanks to the veterinarians of this clinic for being so good, kind and professional. My parents regularly bring me to see them. The doctors of this clinic are very helpful and do no cause any discomforts. Even vaccinations don`t hurt.“",
            image: adonis,
            age: "4 years",
        },
        {
            id: 2,
            name: "Tubby",
            text: "“I'm so lucky to have my parents. They noticed a small knick on my paw and quickly took me to the clinic. The veterinarians are so friendly and gentle. He prescribed me some treatment and after a week I could fully step on my paw.“",
            image: goldenPuppy,
            age: "6 months",
        },
        {
            id: 3,
            name: "Milo",
            text: "“I am very grateful to the veterinarians of this clinic for their professionalism and care. They always take the time to explain everything to my parents and make sure I am comfortable during my visits. I highly recommend this clinic to all pet owners.”",
            image: parrot,
            age: "2 years",
        },
        {
            id: 4,
            name: "Bella",
            text: "“I had a great experience at this veterinary clinic. The staff was friendly and knowledgeable, and they took excellent care of me during my visit. I felt safe and well-cared for, and I would definitely recommend this clinic to other pet owners.”",
            image: hamster,
            age: "1 year",
        }
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const scrollLeft = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
    
    const scrollRight = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };
    
  return (
    <>
    <div className='flex flex-col my-10'>
        <h1 className='font-bold text-4xl text-center mb-10'>What Our Clients Say</h1>
        {/* left arrow */}
        <div className="relative w-full flex justify-center items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-[240px] top-1/2 transform -translate-y-1/2 text-slate-700 p-3 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Single Testimonial Display */}
        <div className="flex justify-center items-center w-full mb-12">
          <div
            key={testimonials[currentIndex].id}
            className="flex flex-col items-center justify-between min-w-[300px] max-w-[400px] h-[300px]  p-5"
          >
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="size-32 rounded-full mb-5"
            />
            <h2 className="text-xl font-bold">{testimonials[currentIndex].name}</h2>
            <p className="text-gray-500 text-center mt-3">{testimonials[currentIndex].text}</p>
            <p className="text-[#04739F] font-bold text-center mt-3">{testimonials[currentIndex].age}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-[250px] top-1/2 transform -translate-y-1/2  text-slate-700 p-3 rounded-full hover:bg-gray-200 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
    
       {/* Background Image with Text */}
       <div className="relative w-full h-[400px] my-10 flex justify-center items-center text-white font-medium">
        <img
            src={paw}
            alt="pawBg"
            className=" h-full object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-lg text-center">
                We provide care that your precious pet deserves
            </h2>
            <p className="text-4xl mt-3 text-center">Do you urgently need a veterinarian? </p>
            <p className='text-4xl'>Just call us at +27 12 665 8989</p>
            <p className='text-lg mt-5'>For emergencies, we have a veterinarian on duty after closure of the clinic.</p>
        </div>
        </div>
    </>
   
  )
}

export default Testimonials