// import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import Swal from 'sweetalert2';

const Login = () => {
    const {userLogin,googleLogin,setUser}=  useContext(AuthContext)
  const provider =new GoogleAuthProvider()
  const navigate = useNavigate()
  const location = useLocation()
  const [showPassword , setShowPassword] = useState(false)

const handleSignIn = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    userLogin(email, password)
    .then(result => {
        console.log(result.user)
        navigate(location.state || '/')
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log in successfully",
        showConfirmButton: false,
        timer: 1500
});
    })
    .catch(error => console.log(error))



}


const handleGoogle = () =>{

    googleLogin(provider)
    .then(result =>{
        // console.log(result.user)
        setUser(result.user.photoURL)
        navigate(location.state || '/')
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log in successfully",
        showConfirmButton: false,
        timer: 1500
});

    })
    .catch(error =>{
        console.log(error)
    })



}




    return (
      <div className="hero bg-base-200  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse bg-white py-16 px-14">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <div className='text-center'>
           <h1 className="text-5xl font-bold py-2 text-blue-500"> Log in</h1>
         <p>Sign in to your account to continue</p>
      </div>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input border border-gray-200 shadow-lg" placeholder="Email" />
       <div className='relative '>
           <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md shadow-lg border border-gray-200" />

                <span onClick={()=> setShowPassword(!showPassword)} className='absolute right-4 top-7 '>
                    {showPassword ? <IoIosEye size={20} className='cursor-pointer' /> : <IoIosEyeOff size={20} className='cursor-pointer'/>}
                </span>
       </div>
         
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <h1 className='text-center text-xs py-3'>Or</h1>

            <button onClick={handleGoogle}  className="btn bg-white text-black border-[#e5e5e5]">
                            <FcGoogle />
                        Login with Google
                        </button>

            <p>Don't have an account ? <Link to='/register' className='text-blue-800'>sign Up</Link></p>
        </form>
      </div>
    </div>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"><span className='text-blue-400'>WelCome</span> Back</h1>
      <p className="py-6">
      Sign in to your account to continue your roommate search journey.
      </p>
      <p>Don't have an account ? <Link to='/register' className='text-blue-800'>sign Up</Link></p>
    </div>
  
  </div>
</div>
    );
};

export default Login;