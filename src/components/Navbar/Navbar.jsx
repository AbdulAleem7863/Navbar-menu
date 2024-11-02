import React, { useState } from 'react';
import Logo from '../Logo';
import NavLinks from './NavLinks';
import Button from '../Button';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";




const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <nav className='bg-white '>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
          <Logo />
          <div className='text-3xl md:hidden  ' onClick={() => setOpen(!open)}>
            {!open ? <FiMenu /> : <IoMdClose />}

          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center  gap-8 '>
          <li className='list-none'>
            <a href="/" className='py-7 px-3 inline-block'>Home</a>
          </li>
          <NavLinks />
        </ul>
        <div className='md:block hidden'>
          <Button />
        </div>

        {/* MOBILE NAV  */}

        <ul className={`md:hidden bg-white absolute h-full w-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"} `}>
          <li className='list-none'>
            <a href="/" className='py-7 px-3 inline-block'>Home</a>
          </li>
          <NavLinks />
          <div className='py-5'>
            <Button />
          </div>
        </ul>


      </div>
    </nav>
  );
}
export default Navbar;