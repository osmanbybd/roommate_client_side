import React from 'react';
import {  useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';



 const lifestyleOption =[
        "Pet Friendly",
        "No Pets",
        "Smoker Friendly",
        "No Smoker",
        "Night Owl",
        "Early Bird",
        "Student",
        "Professional",
    ] 


const Update = () => {

    const updateData = useLoaderData()
    console.log(updateData)
    const navigate = useNavigate()
    const {_id , title, roomType, rent, location, contact, lifestyle, description, name, email,availability} =updateData
    
    const handleUpdate = e =>{
        e.preventDefault()
    const form = e.target;
    const fomrData = new FormData(form)
    const lifestyle = fomrData.getAll('lifestyle')
    const UpdateField = Object.fromEntries(fomrData.entries())
    const UpdateListing ={
            ...UpdateField,
            lifestyle
    }
    console.log(UpdateListing)



    //     !UpdateListing.title || !UpdateListing.location || !UpdateListing.rent || !UpdateListing.roomType || !UpdateListing.contact || !UpdateListing.description) {
    // return Swal.fire({

    if(!UpdateListing.title || !UpdateListing.location || !UpdateListing.rent || !UpdateListing.roomType || !UpdateListing.contact || !UpdateListing.description){
        return Swal.fire({
        title: "Oops...",
        text: "please all field required !",
        icon: "error"
});
    }


    fetch(`http://localhost:5000/addListing/${_id}`, {
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(UpdateListing)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0 ){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successfully",
            showConfirmButton: false,
            timer: 1500
            });
            navigate('/')
        }
        else{
            Swal.fire({
        title: "Oops...",
        text: "No Updating!",
        icon: "error"
});
        }
    })

}


    return (
          <div className='lg:p-24 p-8'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='lg:text-7xl font-semibold'>Update Roommate Listing</h1>
                <p>Edit your existing roommate listing details</p>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Title</label>
                    <input type="text" name='title' defaultValue={title}  className="input w-full" placeholder="Title" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">location</label>
                    <input type="text" name='location' defaultValue={location} className="input w-full" placeholder="location" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Rent Room</label>
                    <input type="number" name='rent' defaultValue={rent} className="input w-full" placeholder="125" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Room Type</label>
                    <select name='roomType' defaultValue={roomType}  className="select w-full">
                    <option disabled={true}>Chose your Room</option>
                    <option>single Room</option>
                    <option>Shared Room</option>
                    <option>Master Bad Room</option>
                    </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Contact </label>
                    <input type="text" defaultValue={contact} name='contact' className="input w-full" placeholder="Phone Number" />
                    </fieldset>
                    
                  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Availibity</label>
                    <select name='availability'  defaultValue={availability} className="select w-full">
                    <option disabled={true}>Availabity</option>
                    <option value='Available'>Available</option>
                    <option value='Unavailable'>Unavailable</option>
                    
                    </select>
                    
                    </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full my-3 border p-4">
                    <label className="label">Email</label>
                    <input type="text"  name='email' defaultValue={email} readOnly className="input w-full" placeholder="Email" />
                    </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full my-3 border p-4">
                    <label className="label">Name</label>
                    <input type="text"  name='name' defaultValue={name} readOnly className="input w-full " placeholder="Name" />
                    </fieldset>
                   
                </div>
       
                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                    <label className="label">Life Style</label>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 text-xl'>
                        {
                            lifestyleOption.map(option =>(
                                            <label key={option} className="label">
                                        <input type="checkbox" defaultChecked={lifestyle.includes(option)} name='lifestyle' value={option} className="input checkbox checkbox-sm" placeholder="Rent  Room" />
                                            {option}
                                            </label>

                            ))
                        }
                            </div>
                    </fieldset>
                
                   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full my-3 border p-4">
                           <label className="label">Description</label>
                    <textarea name='description' defaultValue={description} className="textarea w-full" placeholder="Bio"></textarea>
                    </fieldset>
                
                    <input type="submit" className='btn w-full rounded-lg' value="Update Listing" />
            </form>
        </div>
    );
};

export default Update;