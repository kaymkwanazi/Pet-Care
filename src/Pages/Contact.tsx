import React from 'react'
import map from '../Images/map.png'

const Contact:React.FC = () => {
  return (
   <>

    <div className='container mx-auto px-5 grid grid-cols-2 gap-5 my-10'>
           {/* Column 1 */}
        <div>
            <h1 className='font-bold text-4xl mb-5'>Have Questions?</h1>
            <p className='font-extralight'>Feel free to contact us to ask any question or book an appointment with a veterinarian.</p>
            <div className='flex gap-10 mt-8'>
                <p className='font-medium text-blue-500 text-lg'>Address: </p>
                <p className='font-light'>123 Pilot avenue Pretoria CDB, 0012</p>
            </div>
            <div className='flex gap-8 mt-3 '>
                <p className='font-medium text-blue-500 text-lg'>Contacts: </p>
                <p className='font-light'>+27 12 665 8989</p>
            </div>
            <div className='flex gap-10 mt-3'>
                <p className='font-medium text-blue-500  text-lg'>Mon-Fri: </p>
                <p className='font-light'>8am - 8pm</p>
            </div>
            <div className='flex gap-8 mt-3'>
                <p className='font-medium text-blue-500 text-lg'>Saturday: </p>
                <p className='font-light'>9am - 7pm</p>
            </div>
            <div className='flex gap-10 mt-3 '>
                <p className='font-medium text-blue-500 text-lg'>Sunday: </p>
                <p className='font-light'>9am - 5pm</p>
            </div>
        </div>
        {/* Column 2 */}
        <div className='flex flex-col justify-center items-center my-10'>
            <form>
                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="border border-blue-300 rounded-md p-2 w-full mb-4"
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="border border-blue-300 rounded-md p-2 w-full mb-4"
                />
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    required
                    className="border border-blue-300 rounded-md p-2 w-full mb-4"
                />
                <textarea
                    placeholder="Enter your message"
                    required
                    className="border border-blue-300 rounded-md p-2 w-full mb-4 h-32"
                ></textarea>
            </form>
        </div>
    </div>
    <div className="container mx-auto px-5 mb-10">
        {/* Embedded Map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.7043501135054!2d28.18639708057127!3d-25.74728891898769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9563bfac9cc4ab%3A0x5f883de003f0789c!2sCentre%20Walk!5e0!3m2!1sen!2sza!4v1745488277992!5m2!1sen!2sza" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        loading="lazy" 
        ></iframe>
      </div>
   </>
  )
}

export default Contact
