import React from 'react';
import paw from '../Images/paw.png';
import aboutPic from '../Images/Image-about.webp';
import dogGif from '../Images/dog-gif.gif'

const About: React.FC = () => {
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
      <div className='container mx-auto flex items-center justify-center my-10'>
        <img src={dogGif} 
          alt="Dog Gif" 
          className="w-full h-1/3 object-cover rounded-lg"
        />

      </div>
    </>
  );
};

export default About;