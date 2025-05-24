// import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const Profile = () => {
   
//    const {user} = useContext(AuthContext)
   const allData = useLoaderData()

   const [data, setData] = useState(allData)
	// console.log(data)
	const [showUpdate, setShowUpdate] = useState(false)

	const handleUpdaeProfile = e =>{
		e.preventDefault()

		const form = e.target;
		
		const updateProfile ={
			displayName: form.displayName.value,
			photo: form.photo.value,
			email: form.email.value
		}


		fetch(`https://roommate-server-side-alpha.vercel.app/users/${data.email}`, {
			method: 'PUT',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify(updateProfile)
		})
		.then(res => res.json())
		.then(data =>{
			// console.log(data)
			setData(updateProfile)
			if(data.modifiedCount){
				Swal.fire({
				title: "Drag me!",
				icon: "success",
				draggable: true
				});
			}
		})

	}


    return (
<div className=' w-full max-w-4xl p-3 mx-auto my-5 '>
 
<div className='border border-gray-200 shadow-lg flex  py-9 gap-5  lg:justify-center lg:items-center '>
		<div>
			<img src={data.photo} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
		</div>
	<div className="space-y-4  divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">Email:  {data.email}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">Name: {data.displayName}</p>
		</div>
	
	</div>
</div>

	<div className='flex justify-end my-4  ' onClick={() => setShowUpdate(!showUpdate)}>
	
		{
			showUpdate ? <button className='btn btn-error'>cancel</button>  : <button className='btn btn-primary'>Update Profile</button> 
		}
	</div>		
	{
		showUpdate && 
		<div className='flex justify-center items-center'>
		<form onSubmit={handleUpdaeProfile} className="fieldset shadow-lg border-base-300 rounded-box w-xs border p-4">
		<legend className="fieldset-legend">Profile Update</legend>

		<label className="label">Email</label>
		<input type="email" name='email' defaultValue={data.email} className="input border-none shadow-lg" placeholder="Email" />
		<label className="label">Name</label>
		<input type="text" name='displayName' defaultValue={data.displayName} className="input border-none shadow-lg" placeholder="Name" />

		<label className="label">Photo</label>
		<input type="text" name='photo' defaultValue={data.photo} className="input border-none shadow-lg" placeholder="Password" />

		<button type='submit' className="btn btn-neutral mt-4">Update</button>
		</form>
	</div>
	}
</div>
    );
};

export default Profile;