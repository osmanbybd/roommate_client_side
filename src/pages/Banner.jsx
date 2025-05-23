import React from 'react';
// import { Link } from 'react-router-dom'; // ✅ Correct router
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css'; // ✅ Required base style
import 'swiper/css/navigation'; // ✅ For navigation arrows
import './banner.css'
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';



const Banner = () => {
  return (
    <div className="w-full ]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide className='banner '>
        <div className='flex flex-col  space-y-3'>
            
          
        <Fade cascade>
                <span className='text-5xl text-blue-600 font-bold'>
                <Typewriter 
 
                words={['Find Your Perfect Roommate Match']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                ></Typewriter>
            </span>
        <p className='text-white'>Connect with compatible roommates based on lifestyle, budget, <br /> and location preferences</p>
        <Link to='browsListing'><button className="btn btn-primary">Brows Listing</button></Link>
        </Fade>
        </div>
        </SwiperSlide>
        <SwiperSlide className='banner2'>
             <div className='flex flex-col  space-y-3'>
             <span className='text-5xl text-blue-600 font-bold'>
                <Typewriter 
                words={['Safe & Secure Roommate Finding']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                ></Typewriter>
            </span>
        <p className='text-green-800'>Verified profiles and secure messaging help you find a trustworthy roommate</p>
        <Link to='register'><button className="btn btn-primary">Create Account</button></Link>
        </div>
        </SwiperSlide>
        <SwiperSlide className='banner3'>
         <div className='flex flex-col  space-y-3'>
             <span className='text-5xl text-blue-600 font-bold'>
                <Typewriter 
                words={['List Your Spa']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                ></Typewriter>
            </span>
        <p className='text-white'>Create a listing and find the perfect roommate for your apartment or house</p>
        <Link to='addListing'><button className="btn btn-primary">Add Listing</button></Link>
        </div>
        </SwiperSlide>
       
 
      </Swiper>
    </div>
  );
};

export default Banner;
