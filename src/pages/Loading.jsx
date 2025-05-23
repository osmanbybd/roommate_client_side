import React from 'react';
// import animationData from '../assets/animations/roommate-animation.json';
import Lottie from 'lottie-react';

const Loading = () => {
    return (
            <div className='flex min-h-screen justify-center items-center'>
                {/* <Lottie animationData={animationData} className='w-[300px]' loop={true}></Lottie> */}
            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default Loading;