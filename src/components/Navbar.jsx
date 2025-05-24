import React, { useContext } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, NavLink, } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/user.png'
import { ThemeContext } from '../context/ThemeProvider';



const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  const {darkMode, handleThemeChange} = useContext(ThemeContext)

  const handleLogOut = () =>{
    logOut()
    .then((result) =>{
      console.log(result)
      alert('logout')
    })
    .catch(error => console.log(error))
  }

  const links = <>
  
  <li><NavLink className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`} to='/'>Home</NavLink></li>
  <li><NavLink className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`} to='addListing'>Add Listing</NavLink></li>
  <li><NavLink className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}to='browsListing'>Brows Listing</NavLink></li>
    { user &&  <li><NavLink  className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`} to={`myListing?email=${user?.email}`} >My Listing</NavLink></li>}
  </>



    return (
        <div className={`navbar ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}  px-5`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ">
        
       {links}
       <a className="btn">Button</a>
      </ul>
    </div>
    <Link className=" lg:text-4xl md:text-2xl text-xl flex items-center gap-2 "><FaHome className='text-blue-700' /> RoomMate</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex gap-3">
      <div><button 
      className='btn btn-primary' 
      onClick={() =>handleThemeChange(darkMode ? 'light' : 'dark')}
      >
        {
          darkMode ? 'light mode' : 'dark mode' 
        }
        </button></div>
  
      {
        user ? (
         <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="cursor-pointer m-1"><img className='w-12 rounded-full h-12' src={`${user ? user.photoURL : logo}`} alt="" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>{user.displayName}</a></li>
    <li><Link to={`/profile?email=${user.email}`}>Profile</Link></li>
    <li><Link><button className='btn btn-error' onClick={handleLogOut}>Log out</button></Link></li>
  </ul>
</div>

        ) : <>
        
         <Link to='login'> <button className="btn btn-primary">Log in</button></Link>
          <Link to='register'><button className="btn btn-accent">Register</button></Link>
        </>
      }

  
  </div>
</div>
    );
};

export default React.memo(Navbar) ;