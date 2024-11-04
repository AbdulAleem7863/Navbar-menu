import React from "react";
import Logo from "../../assets/white logo.png";
import FooterLink from "./FooterLink";
import "../../App.css"

const Footer = () => {
  return (
    <div className="footbg min-h-[35vh] px-14 my-4 flex justify-between items-center">
      <div className="w-[28vh]  ">
      <img src={Logo} className='h-full md:cursor-pointer '/>
      </div>
     <FooterLink/>
     <hr className="border-gray-400 my-3"/>
     <div>
        <h1 className="text-sm text-gray-400 text-center my-2">© 2024 Your Company Name. All rights reserved.</h1>
     </div>
    </div>
  );
};

export default Footer;
