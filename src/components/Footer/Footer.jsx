import React from "react";
import Logo from "../../assets/white logo.png";
import FooterLink from "./FooterLink";
import "../../App.css"
import FootIcons from "./FootIcons";

const Footer = () => {
  return (
    <div className="footbg relative md:h-[50vh] overflow-hidden   my-4 p-2">
      <div className=" py-3 mx-5   md:flex  md:justify-between md:items-start">
      <div className="w-[25vh] mx-auto md:mx-0  ">
      <img src={Logo} className='h-full mx-6  md:cursor-pointer  '/>
      </div>
      <div className=" flex flex-col items-center">
        <h1 className="text-stone-400 uppercase md:text-base text-lg font-semibold">About Us</h1>
        <p className="text-[0.65rem] text-white bg-red-500 w-3/4 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rerum!</p>
      </div>
   <div className="">
   <FooterLink/>
   </div>
      </div>
      <FootIcons/>
     <div className="absolute  bottom-1   w-full ">
     <hr className="border-gray-400   "/>
     <div>
        <h1 className="text-[0.62rem] text-gray-400 text-center mt-2">© 2024 Koning Lather & Clothing. All rights reserved.</h1>
     </div>
     </div>
     
    </div>
  );
};

export default Footer;
