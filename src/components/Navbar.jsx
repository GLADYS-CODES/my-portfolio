
import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
 const Navbar = () => {
  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        
        <div>

    <ul className='hidden md:flex'>
        
        <li>  Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        </ul>     



        </div>
        <div className='hidden'>
            <FaBars />
        </div>


        <ul className='hidden'>
            <li>  Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}


export default Navbar;