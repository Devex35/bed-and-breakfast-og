import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 text-left bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-3rem] space-y-2'>
      <p className=' text-xl'>{message}</p>
        <h2 className='text-5xl font-bold font-serif'>{heading}</h2>     
        <button className='border-5 rounded-full p-3 '><FaArrowCircleDown className='h-7 w-7'/></button>
      </div>
    </div>
  );
};

export default Hero;
