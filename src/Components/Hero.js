import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img className='h-full w-full object-cover' src='https://images.unsplash.com/photo-1519068737630-e5db30e12e42?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations Worldwide</h2>
        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='p-3 bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'
              type='text'
              placeholder='Search Destinations'
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;