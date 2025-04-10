import React from 'react'
import paw from '../Images/paw.png'
import aboutPic from'../Images/Image-about.webp'
const About: React.FC = () => {
  return (
    <>
    <div className='container mx-auto px-4 grid grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold text-5xl mb-5'>We Do Our Best to Keep Your Pets Healthy</h1>
            <p className='text-gray-700 mb-5 text-2xl font-light'>
                Our veterinary clinic has been operating for over 20 years. 
                We have successfully cured thousands of pets, from dog and cat to exotic pets such as parrots, monkeys, etc.
            </p>
            <div>
              <img src={paw}
                  className='w-10 h-10 mb-4'
                  alt='paw icon'
              />  
            </div>
        </div>

        <div>
          <img
            src={aboutPic}
            alt='About Us'
            className='w-full h-full object-cover rounded-lg'
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>

    </div>
    </>
  )
}

export default About