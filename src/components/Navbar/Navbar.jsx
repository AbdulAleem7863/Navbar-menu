
import React, { useState } from 'react';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import Button from '../Button';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import LoginBtn from '../LoginBtn';
import SignupBtn from '../SignupBtn';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className='bg-[#000000] transition-all duration-500 h-[10vh] opacity-85 hover:opacity-100 '>
      <div className='flex items-center font-medium justify-around h-full'>
        {/* Logo and Menu Icon */}
        <div className='z-50 h-[19vh] md:w-auto w-full flex justify-between '>
          <Logo />
          <div className={`text-3xl absolute top-5 right-3  md:hidden cursor-pointer ${open?"text-black":"text-white"}`} onClick={toggleMenu}>
            {open ? <IoMdClose   /> : <FiMenu  />}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className='md:flex hidden uppercase items-center gap-8'>
          <li className='list-none'>
            <a href="/" className='py-7 px-3 inline-block text-white'>Home</a>
          </li>
          <NavLinks />
        </ul>

        {/* Desktop Button */}
        <div className='md:block hidden '>
          <LoginBtn />
          <SignupBtn/>
        </div>

        {/* Mobile Navigation Menu */}
        <ul className={`md:hidden bg-white text-black absolute h-full w-full bottom-0 py-24 pl-4 transition-all duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
          <li className='list-none'>
            <a href="/" className='py-7 px-3 inline-block'>Home</a>
          </li>
          <NavLinks />
          <div className='py-5'>
          <LoginBtn />
          <SignupBtn/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
