

import React, { useState } from 'react';
import LogoImg from '../assets/logo.png';
import icon from '../assets/icon.png';
import usflag from '../assets/usflag.webp';
import pkflag from '../assets/pkflag.webp';
import indflag from '../assets/indflag.webp';
import fblogo from '../assets/fblogo.png';
import outlooklogo from '../assets/outlooklogo.png';
import instalogo from '../assets/instalogo.png';
import gmaillogo from '../assets/gmaillogo.png';
import {  FaAngleDown, FaEye, FaEyeSlash } from 'react-icons/fa';
import "../App.css"


const SignUp = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');  // Store only country code
  const [selectedFlag, setSelectedFlag] = useState(usflag); // Store the selected flag
  const [showPassword, setShowPassword] = useState(false); // Show password

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleCountrySelect = (country, code, flag) => {
    setSelectedCountryCode(code);  // Update the country code
    setSelectedFlag(flag);  // Update the flag
    setIsDropdownOpen(false);
    console.log(`Selected Country Code: ${code}`);
  };

  const phoneDropDown = [
    { name: 'United States', code: '+1', flag: usflag },
    { name: 'Pakistan', code: '+92', flag: pkflag },
    { name: 'India', code: '+91', flag: indflag },
  ];

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center w-full p-8">
      {/* Left side black background */}
      <div className=" w-1/3 h-[76vh]  bg-black flex justify-center items-start">
        <img src={LogoImg} alt="logo" className="-translate-y-16 h-[18rem]" />
      </div>

      {/* Right side form container */}
      <div className="min-h-[50vh] w-1/2 gap-1 p-6 bg-white flex flex-col justify-center">
        <div className="flex h-[14vh] flex-col justify-center items-center">
          <img src={icon} alt="icon" />
          <h1 className="font-bold text-center text-2xl my-4 text-black">Create an Account</h1>
        </div>

        <form action="" className="p-4 flex flex-col gap-[1.17rem]">
          {/* First Name and Last Name in one line */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstname" className="font-semibold text-sm">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                id="firstname"
                className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastname" className="font-semibold text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                id="lastname"
                className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
              />
            </div>
          </div>

          {/* Email and Phone in one line */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="email" className="font-semibold text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email Address"
                id="email"
                className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
              />
            </div>
            <div className="flex flex-col w-1/2 relative">
              <label htmlFor="phone" className="font-semibold text-sm">Phone</label>
              <div className="flex items-center basis-2 bg-gray-200 rounded-2xl">
                {/* Country code dropdown */}
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="text-[0.84rem] px-2 py-1 items-center gap-1 flex"
                >
                  <img src={selectedFlag} alt="country flag" className="w-7" />
                  <span>{selectedCountryCode}</span> {/* Only show code */}
                  <FaAngleDown />
                </button>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  id="phone"
                  className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
                />
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-10 mt-1">
                    <ul className="py-2 text-sm text-gray-700">
                      {phoneDropDown.map((item, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleCountrySelect(item.name, item.code, item.flag)}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            <img src={item.flag} alt={item.name} className="w-6 inline mr-2" />
                            {item.name} ({item.code}) {/* Show name and code in dropdown */}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Address and Postal Code in one line */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="address" className="font-semibold text-sm">Address</label>
              <textarea
                id="address"
                placeholder="Enter Address"
                className="resize-none bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="postalcode" className="font-semibold text-sm">Postal Code</label>
              <input
                type="text"
                id="postalcode"
                placeholder="Enter Postal Code"
                className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
              />
            </div>
          </div>

          {/* Password and Confirm Password */}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="password" className="font-semibold text-sm">Password</label>
              <div className='flex justify-between items-center w-full bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none'>

                <input
                  type={showPassword ?"text":"password"}
                  id="password"
                  placeholder="Enter Password"
                  className="bg-gray-200 outline-none"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}

                </span>
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="confirmpassword" className="font-semibold text-sm">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
                className="bg-gray-200 px-3 py-2 text-sm rounded-2xl outline-none border-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button className="w-1/2 py-2 bg-blue-500 text-white font-semibold rounded-2xl">
              Create Account
            </button>
          </div>
       <div className='flex justify-center'>
       <p>OR</p>
       </div>

          {/* Social Media Login Options */}
          <div className="flex justify-center gap-4 mt-4">
             <img src={fblogo}  className='h-9'/>
             <img src={outlooklogo} className='h-9'/>
             <img src={gmaillogo} className='h-9'/>
             <img src={instalogo} className='h-9'/>
             
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
