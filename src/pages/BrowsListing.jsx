import React, { useState } from 'react';
// import { useContext } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';
import { ThemeContext } from '../context/ThemeProvider';

const BrowsListing = () => {
    const initialAllData = useLoaderData()
    const [allData , setAllData] = useState(initialAllData)
    // const {darkMode} = useContext(ThemeContext)
    console.log(allData)
    const [serchTerm , setSearchTerm] = useState(' ')

    const handleSearch = e =>{
        const value = e.target.value.toLowerCase()
        setSearchTerm(value)

        const filtered = initialAllData.filter((item)=>{
             return (item.title.toLowerCase().includes(value) || item.location.toLowerCase().includes(value))
        });
        setAllData(filtered)



    }




    return (
      <div className={` p-3  w-full container mx-auto ` }>
        <div className='text-center'>
        <h1 className='lg:text-5xl md:text-2xl text-xl font-bold'>Browse Roommate Listings</h1>
            <p>Find your perfect roommate match from our listings</p>
        </div>
        <fieldset className="fieldset">
  <legend
  
  className="fieldset-legend text-xl">Chose Your Room Type</legend>
  <input
   onChange={handleSearch}
   value={serchTerm} 
      	
  type="text" className="input border border-gray-600 shadow-lg" placeholder="search your type" />
 
</fieldset>
          <div className="overflow-x-auto w-full  border border-gray-200 shadow-lg p-5 my-4 rounded-lg ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Details</th>
        <th>Status</th>
        <th>Rent</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}


      
     {
       allData.length > 0 ? 
       (
         allData.map(data => (
             <tr key={data._id}>
        <th><div>
            <h1 className='text-xl'>{data.title}</h1>
            <h4 className='flex items-center gap-2'><FaLocationDot /> {data.location}</h4>
            </div></th>
        <td ><h1 className='bg-green-700 rounded-full text-center py-1 text-white text-xs'>{data.availability}</h1></td>
        <td className='text-lg'>${data.rent}/month</td>
        <td> <Link to={`/details/${data._id}`}><button className='btn btn-primary'>see more</button></Link></td>
      </tr>
        ))
       ) : (
          <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No listings found for "{serchTerm}"
                </td>
              </tr>
       )
     }
    
    </tbody>
  </table>
</div>
      </div>
    );
};

export default BrowsListing;