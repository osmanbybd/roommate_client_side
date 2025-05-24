import React, { useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDelete, MdEdit } from 'react-icons/md';
import {  Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyListing = () => {
    const initialmyListing = useLoaderData()
    const [myListing, setMyListing] = useState(initialmyListing)



    console.log(myListing)




const handleDelete = (id) =>{
                Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {


           fetch(`https://roommate-server-side-alpha.vercel.app/addListing/${id}`,{
            method: 'DELETE'
           })     
           .then(res => res.json())
           .then(data =>{
            console.log(data)
            if(data.deletedCount){
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
            });
            const remainingMyListing = myListing.filter(listing => listing._id !== id)
            setMyListing(remainingMyListing)

            }

           })


        }
        });
}




    return (
        <div className='container mx-auto my-3 p-2'>

            <div className='flex justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>My Listings</h1>
                    <p>Manage your roommate listings</p>
                </div>
                <div>
                    <Link to='/addListing'><button className='btn'>Add New Listing</button></Link>
                </div>
            </div>

                  <div className="overflow-x-auto  border border-gray-600 p-2 my-4 rounded-lg ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Details</th>
                <th>Status</th>
                <th>Rent</th>
                <th>Room type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
        
        
              
             {
               myListing.map(data => (
                     <tr key={data._id}>
                <th><div>
                    <h1 className='text-xl'>{data.title}</h1>
                    <h4 className='flex items-center gap-2'><FaLocationDot /> {data.location}</h4>
                    </div></th>
                <td ><h1 className='bg-green-700 rounded-full text-center py-1 w-5/6 text-white text-xs'>{data.availability}</h1></td>
                <td className='text-lg'>${data.rent}/month</td>
                <td className='text-lg'>${data.roomType}/month</td>
                
                    <td>
                        <div className='flex gap-2'>
                            <Link to={`/details/${data._id}`}><button className='btn'><FaRegEye/></button></Link>
                            <Link to={`/update/${data._id}`}><button className='btn'><MdEdit className='text-blue-500' /></button></Link>
                           <button onClick={() =>handleDelete(data._id)} className='btn'><MdDelete size={20} className='text-red-700'/></button>
                        </div>
                    </td>
              
                
              </tr>
                ))
             }
            
            </tbody>
          </table>
        </div>

         
        </div>
    );
};

export default MyListing;