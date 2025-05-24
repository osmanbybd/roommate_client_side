import React, { useContext, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';
import { IoHome } from 'react-icons/io5';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { ThemeContext } from '../context/ThemeProvider';
const Reurement = () => {
const {darkMode} = useContext(ThemeContext)

useEffect(() =>{
    Aos.init({
        duration: 3000, once: true
    })
},[])

    return (
       <div className='p-8 '   data-aos="fade-up"
            data-aos-duration="3000">
        <div className='text-center py-4  '>
            <h1 className='lg:text-6xl md:text-3xl text-2xl font-semibold'>How It Works</h1>
            <p>Finding the perfect roommate is easy with our simple 4-step process.</p>
        </div>
         <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2'>
            <div className={`border p-12 text-center flex flex-col justify-center ${darkMode ? "bg-gray-600" : "bg-white"} items-center shadow-lg border-gray-200 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105`}    
             >
               
                  <IoIosContact size={40} className='my-3'/>
                <h1 className='text-2xl font-bold'>Step 1: Create a Profile</h1>
                <p className='text-gray-500'>Sign up and set up your profile with your  preferences,  budget,  and lifestyle details.</p>
            </div>
            <div className={`border p-12 text-center flex flex-col justify-center ${darkMode ? "bg-gray-600" : "bg-white"} items-center shadow-lg border-gray-200 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105`} >
                <FaMessage size={35} className='my-3' />
                <h1 className='text-2xl font-bold'>Step 2: Browse Listings</h1>
                <p className='text-gray-500'>Explore available roommate listings or post your own to find potential matches.</p>
            </div>
            <div className={`border p-12 text-center flex flex-col justify-center ${darkMode ? "bg-gray-600" : "bg-white"} items-center shadow-lg border-gray-200 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105`} >
                <FaSearch size={35} className='my-3' />
                <h1 className='text-2xl font-bold'>Step 3: Connect & Communicate</h1>
                <p className='text-gray-500'>Reach out to compatible roommates through our secure messaging system.</p>
            </div>
            <div className={`border p-12 text-center flex flex-col justify-center ${darkMode ? "bg-gray-600" : "bg-white"} items-center shadow-lg border-gray-200 rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-105`} >
                <IoHome size={35} className='my-3'/>
                <h1 className='text-2xl font-bold'>Step 4: Find Your New Home</h1>
                <p className='text-gray-500'>Meet up in person and finalize your perfect roommate arrangement.</p>
            </div>
         
        </div>
       </div>
    );
};

export default Reurement;