import React, { useContext, useState } from 'react';
import { FaHeart, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import { ThemeContext } from '../context/ThemeProvider';

const Details = () => {

    const data= useLoaderData()
    console.log(data)
    const [likeCounte, setLikeCounte] = useState(data.likes || 0)
    const [shoePhone, setShoePhone] = useState(false)
    const {darkMode} =useContext(ThemeContext)

    const lifestyleData = data.lifestyle ? (Array.isArray(data.lifestyle) ? data.lifestyle : data.lifestyle.split(',')) : []


    const handleCounte = async()=>{
        const res =await fetch(`https://roommate-server-side-alpha.vercel.app/addListing/like/${data._id}`, {
            method: 'PUT'
        })
        if(res.ok){
            setLikeCounte(prev => prev + 1)
            setShoePhone(true)
        }

    }




    return (
        <div className={`flex justify-center items-center p-5  ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className=' bg-gray-200 rounded-lg  p-5 '>
            <h1 className='text-center py-3 text-xl text-gray-400'> {likeCounte && <p>{data.likes} people are interested in this listing</p>}</h1>
            <div className='flex flex-col lg:justify-between '>
                <h1 className='lg:text-2xl font-bold'>{data.title}</h1>
                    <h1>{data.availability}</h1>
            </div>
            <h1 className='flex gap-1 items-center'><FaLocationDot className='text-blue-500' />{data.location}</h1>
            <div className='my-10 '>
                <div className='space-y-4 '>
                   <div className='flex justify-between '>
                     <div>
                        <h1 className='text-2xl font-bold py-2'>Listing Details</h1>
                    <h1>$ {data.rent}/month</h1>
                     </div>
                       <div>
                         <h1 className='text-2xl font-bold '>Room Type</h1>
                        <h1 className='bg-white rounded-full px-2 mt-2'>{data.roomType}</h1>
                       </div>
                   </div>

                        <h1 className='text-2xl font-bold'>Life Style</h1>
                          <div>
                <h1  className='flex flex-wrap gap-3 ' >{lifestyleData.slice(0 ,3).map((item ,index) => (
                    <span key={index} className='px-3 py-1 bg-white rounded-full'>{item}</span>
                ))}
                {lifestyleData.length > 3 && (
                    <span className='px-3 py-1 bg-white rounded-full'>+{data.lifestyle.length - 3}</span>
                )}
                </h1>

            </div>
                </div>
                <div className='mt-3'>
                <h1 className='text-3xl font-bold'>Description</h1>
                <p className='w-4/6'>{data.description}</p>
                </div>
                {
                    shoePhone && (
                    <div>
                        <h1 className='text-2xl font-semibold'>Contact Info</h1>
                            <p className='flex items-center gap-2 text-xl text-blue-600'><FaPhoneAlt />{data.contact}</p>
                    </div>
                    )
                }
                 </div>

                 <div className='flex justify-between'>
                   <Link to='/'><button className='btn bg-black text-white'>Back</button></Link>
                  
                        <button onClick={handleCounte} disabled={shoePhone}  className='btn btn-primary'><FaHeart className=''/></button>
                        
                   
                 </div>
          </div>
          
        </div>
    );
};

export default Details;