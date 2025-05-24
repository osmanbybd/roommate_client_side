import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import {  useNavigate } from 'react-router';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';


const Register = () => {
const {userRegister,updateuser,setUser,googleLogin}= useContext(AuthContext)
// console.log(userRegister)

const provider = new GoogleAuthProvider()
const navigate = useNavigate()
const [showPassword , setShowPassword] = useState(false)



const handleSignUp = e =>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const name = form.name.value;
    const photo = form.photo.value;
    // console.log(formData) 
    const {email, password, ...restProfile} = Object.fromEntries(formData.entries())
    // console.log(email,password,)
   const reaxPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if(!reaxPassword.test(password)){
                    alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character")
                    return
                }
                if(name.length < 5){
                    alert("name more  than 5 ceracters")
                    return
                } 



    userRegister(email, password)
    .then(result => {
        // console.log(result.user)
        const userProfile ={
            email,
            ...restProfile,
            creationTime : result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
        }

        const user = result.user;
        updateuser({displayName :name , photoURL : photo})
        .then( () =>{
            setUser({...user , displayName: name, photoURL: photo})
            navigate('/')
        })
        .catch(error => console.log(error))



        fetch('https://roommate-server-side-alpha.vercel.app/users', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        })
        .catch(error =>{
            console.log(error)
        })


}


const handleGoogle = () =>{

    googleLogin(provider)
    .then(result =>{
        const logedUser = result.user
        // console.log(logedUser)  
        navigate('/')
        setUser(logedUser)
        const userProfile = {
            email: logedUser.email,
            displayName: logedUser.displayName,
            photo : logedUser.photoURL,
            lastSignInTime :logedUser.metadata?.lastSignInTime

        }

        fetch('https://roommate-server-side-alpha.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then(data=> console.log(data))


    })
    .catch(error =>{
        // console.log(error)
    })



}

    
    return(

    <div className="card bg-base-100 w-full max-w-sm mx-auto my-4 shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' required className="input border border-gray-200 shadow-lg" placeholder="Your Name" />
          <label className="label">Phone</label>
          <input type="text" name='phone' required="" className="input border border-gray-200 shadow-lg" placeholder="Phone Number" />
          <label className="label">Photo</label>
          <input type="text" name='photo' required className="input border border-gray-200 shadow-lg" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" required name='email' className="input border border-gray-200 shadow-lg" placeholder="Email" />
          <div className='relative '>
           <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md shadow-lg border border-gray-200" />

                <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 top-7 '>
                    {showPassword ? <IoIosEye size={20} className='cursor-pointer' /> : <IoIosEyeOff size={20} className='cursor-pointer'/>}
                </span>
       </div>
          
          <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
          <h1 className='text-center py-2'>Or</h1>
          <button onClick={handleGoogle}  className="btn bg-white text-black border-[#e5e5e5]">
                <FcGoogle />
            Login with Google
            </button>
        </form>
      </div>
    </div>

    )
};

export default Register;