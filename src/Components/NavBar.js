import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-[95%] rounded-[15px] ml-[20px] mr-[20px] mt-[30px] justify-between items-center h-20 px-4 absolute z-10 text-black bg-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TravelApp</h1>
      </div>
      <ul className='hidden md:flex font-bold bg-white gap-1 cursor-pointer border-black'>
        <li><i class="fa-solid fa-house-user"></i> Home</li>
        <li><i class="fa-solid fa-location-dot"></i>  Destinations</li>
        <li><i class="fa-solid fa-suitcase"></i>  Travel</li>
        <li><i class="fa-solid fa-eye"></i> View</li>
        <li><i class="fa-solid fa-address-book"></i> Contact</li>
      </ul>
      <div className='hidden md:flex mr-4 font-bold cursor-pointer'>Sign Up
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className=' border-b border-black p-2'>TravelApp</h1>
          <li className='border-b border-black text-center'>Home</li>
          <li className='border-b border-black text-center'>Destinations</li>
          <li className='border-b border-black text-center'>Travel</li>
          <li className='border-b border-black text-center'>View</li>
          <li className='border-b border-black text-center'>Contact</li>
          <li className='border-b border-black text-center'>Sign Up</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;