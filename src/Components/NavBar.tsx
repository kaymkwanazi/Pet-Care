import React from 'react'
import logo from '../Images/vetLogo.avif'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'


const NavBar: React.FC = () =>{
  return (
    <>
    <nav className="w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <img src={logo} alt="Logo" className="size-20" /> 
            <ul className="flex space-x-10 font-medium">
                {/* <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li> */}
                <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-blue-600">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Pricing</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a></li>
            </ul>
            <div className='flex space-x-4'>
                <FaFacebookSquare size={28} className='text-blue-700'/>
                <FaInstagramSquare size={28} className='text-pink-600' />
                <FaYoutubeSquare size={28} className='text-red-600'/>
            </div>
            
            
        </div>
    </nav>
    </>
  )
}

export default NavBar
