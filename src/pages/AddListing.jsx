import React from 'react';
import { useNavigate } from 'react-router';
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

const AddListing = () => {


const navigate = useNavigate()

   const handleAddListing = e =>{
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form)
    const lifestyle= formData.getAll('lifestyle')
    const rowData = Object.fromEntries(formData.entries())


    if(!rowData.title || !rowData.location || !rowData.rent || !rowData.roomtype || !rowData.description || rowData.email){
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the required fields!!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
    return

    }


    const newFormData = {
        ...rowData,
        lifestyle
    }

    console.log(newFormData)


    fetch('http://localhost:5000/addListing', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newFormData)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)

       Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add successfully",
        showConfirmButton: false,
        timer: 1500
        });
        navigate('/')

     
    })




   }


    return (

         <div className='lg:p-24 p-8'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='lg:text-7xl text-xs font-semibold'>Add Roommate Listing</h1>
                <p>Create a new listing to find your perfect roommate match</p>
            </div>
            <form onSubmit={handleAddListing} className=' border border-gray-200 shadow-lg p-5 rounded-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                    <fieldset className="fieldset    p-4">
                    <label className="label">Title</label>
                    <input type="text" name='title' required className="input w-full shadow-lg border border-e-gray-200" placeholder="Title" />
                    </fieldset>
                    <fieldset className="fieldset    p-4">
                    <label className="label">location</label>
                    <input type="text" name='location' required className="input w-full shadow-lg border border-e-gray-200" placeholder="location" />
                    </fieldset>
                    <fieldset className="fieldset    p-4">
                    <label className="label">Rent Room</label>
                    <input type="number" name='rent' required className="input w-full shadow-lg border border-e-gray-200" placeholder="125" />
                    </fieldset>
                    <fieldset className="fieldset     p-4">
                    <label className="label">Room Type</label>
                    <select name='roomType' defaultValue="Pick a color" className="select w-full">
                    <option disabled={true}>Chose your Room</option>
                    <option>single Room</option>
                    <option>Shared Room</option>
                    <option>Master Bad Room</option>
                    </select>
                    </fieldset>
                    <fieldset className="fieldset     p-4">
                    <label className="label">Contact </label>
                    <input type="text" name='contact' required className="input w-full shadow-lg border border-e-gray-200" placeholder="Phone Number" />
                    </fieldset>
                    
                  <fieldset className="fieldset    p-4">
                    <label className="label">Availibity</label>
                    <select name='availability'  defaultValue="Pick a color" className="select w-full">
                    <option disabled={true}>Availabity</option>
                    <option value='Available'>Available</option>
                    <option value='Unavailable'>Unavailable</option>
                    
                    </select>
                    
                    </fieldset>
                <fieldset className="fieldset  w-full my-3  p-4">
                    <label className="label">Email</label>
                    <input type="text"  name='email' required className="input w-full shadow-lg border border-e-gray-200" placeholder="Email" />
                    </fieldset>
                <fieldset className="fieldset w-full my-3  p-4">
                    <label className="label">Name</label>
                    <input type="text"  name='name' required className="input w-full shadow-lg border border-e-gray-200" placeholder="Name" />
                    </fieldset>
                   
                </div>
       
                      <fieldset className="fieldset   p-4">
                    <label className="label">Life Style</label>
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 text-xl'>
                        {
                            lifestyleOption.map(option =>(
                                            <label key={option} className="label">
                                        <input type="checkbox" name='lifestyle' value={option} className="input checkbox checkbox-sm" placeholder="Rent  Room" />
                                            {option}
                                            </label>

                            ))
                        }
                            </div>
                    </fieldset>
                
                   <fieldset className="fieldset w-full my-3  p-4">
                           <label className="label">Description</label>
                    <textarea name='description' required className="textarea w-full shadow-lg border border-e-gray-200" placeholder="Bio"></textarea>
                    </fieldset>
                
                    <input type="submit" className='btn bg-[#b086ff] w-full rounded-lg' value="Add Listing" />
            </form>
        </div>


        
 
        
      
   

    );
};

export default AddListing;