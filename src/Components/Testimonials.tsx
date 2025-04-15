import React, { useState } from 'react'
import adonis from '../Images/Adonis.jpg'
import goldenPuppy from '../Images/golden-puppy.gif'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    image: string;
    age: string;
}

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
];

const [startIndex, setStartIndex] = React.useState(0);
const scrollLeft = () => {
    setStartIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
};

const scrollRight = () => {
    setStartIndex((prevIndex) =>
        prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
};

const visiblecards: Testimonial[] = [];
for (let i = 0; i < 2; i++) {
    const cardIndex = (startIndex + i) % testimonials.length;
    visiblecards.push(testimonials[cardIndex]);
}


const Testimonials:React.FC = () => {
  return (
    <>
    <div className='flex flex-col my-20'>
        <h1 className='font-bold text-4xl text-center mb-10'>What Our Clients Say</h1>
        {/* left arrow */}
        <div className='relative w-full'>
            <button 
            onClick={scrollLeft}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out'>
            <FaChevronLeft />
            </button>
            {/* cards display */}
            <div className='flex flex-col md:flex-row justify-center items-center'>
                {visiblecards.map((testimonials) => (
                    <div key={testimonials.id} className='flex flex-col items-center justify-center max-w-[400px] mx-5 mb-10'>
                        <img src={testimonials.image} 
                            alt={testimonials.name} 
                            className='size-48 rounded-full mb-5' />
                        <h2 className='font-bold text-xl'>{testimonials.name}</h2>
                        <p className='text-center mt-3'>{testimonials.text}</p> 
                        <p className='text-[#003360] font-semibold pt-5'>{testimonials.age}</p>
                    
                    </div>    
                ))}
            </div>
            {/* right arrow */}
            <button 
            onClick={scrollLeft}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out'>
            <FaChevronRight />
            </button>
        </div>

    </div>
    </>
   
  )
}

export default Testimonials