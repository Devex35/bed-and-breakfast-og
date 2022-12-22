import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [textVisibility, setTextVisibility] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setTextVisibility('hidden')
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setTextVisibility('visible')
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-7 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}`, backgroundColor: `${color}` }} className='font-bold text-4xl p-5 pt-16 -mt-10'>
            B&b
          </h1>
        </Link>
        <ul style={{ color: `${textColor}`,visibility: `${textVisibility}` }} className='hidden font-extralight sm:flex text-lg'>
          <li className='p-4 hover:text-orange-500 '>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-orange-500 '>
            <Link href='/#gallery'>Rooms</Link>
          </li>
          <li className='p-4 hover:text-orange-500 '>
            <Link href='/#gallery'>About</Link>
          </li>
          <li className='p-4 hover:text-orange-500 '>
            <Link href='/#gallery'>Amenities</Link>
          </li>
          <li className='p-4 hover:text-orange-500 '>
            <Link href='/#gallery'>Testimonials</Link>
          </li>
          {/* <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Work</Link>
          </li> */}
          <li className='p-4 hover:text-orange-500 '>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10 p-3 rounded-lg' style={{backgroundColor: `${color}` }}>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Properties</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Amenities</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Testimonials</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li> */}
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
