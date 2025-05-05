import React from 'react'
import logo from '../Images/vetLogo.avif'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const NavBar: React.FC = () =>{
  return (
    <>
    <nav className="w-full">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to='/' >
            <img src={logo} alt="Logo" className="size-20" /> 
          </Link>
            
            <ul className="flex space-x-10 font-medium">
                {/* <li><a href="#home" className="text-gray-700 hover:text-blue-600">Home</a></li> */}
                <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
                <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a></li>
                <li><a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a></li>
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
