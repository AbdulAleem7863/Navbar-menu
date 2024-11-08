
import React, { useState } from 'react';
import LogoImg from '../assets/logo.png';
import icon from '../assets/icon.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../App.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Show password

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center w-full p-8">

      {/* Right side form container */}
      <div className="min-h-[50vh] w-1/3 gap-1 p-6 bg-white flex flex-col justify-center">
        <div className="flex h-[14vh]  -translate-y-5 flex-col justify-center items-center">
          {/* <img src={icon} alt="icon" /> */}
          <div className='w-36 h-full'>
          <img src={LogoImg} className='w-full h-full' alt='icon'/>
          </div>
          
          <h1 className="font-bold text-center text-2xl  text-black -translate-y-6">Sign in</h1>
        </div>

        <form action="" className="p-4 flex flex-col gap-[1.17rem]">

          {/* Email and Phone in one line */}

          <div className="flex flex-col w-full gap-3">
            <label htmlFor="email" className="font-semibold text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="email"
              className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
            />
          </div>

          {/* Password */}

          <div className="flex flex-col w-full gap-3">
            <label htmlFor="password" className="font-semibold text-sm">Password</label>
            <div className='flex justify-between items-center w-full bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none'>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                className="bg-gray-200 outline-none"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </span>
            </div>
          </div>

          <div className='flex justify-between '>
            
            <div className='flex gap-2'>
              <input type="checkbox" name="" id="" />
              <span className='text-sm'>Keep me sign in</span>
            </div>
            <p className='text-sm text-blue-800 hover:underline hover:text-blue-900 cursor-pointer'>Forget Password ?</p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button className="w-1/2 py-2 bg-blue-500 text-white font-semibold rounded-2xl">
              Sign in
            </button>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Login