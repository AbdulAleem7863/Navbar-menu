// import React from "react";
// import Logo from "../../assets/white logo.png";
// import FooterLink from "./FooterLink";
// import "../../App.css"
// import FootIcons from "./FootIcons";
// import AboutUs from "../AboutUs/AboutUs";

// const Footer = () => {
//   return (
//     <div className="footbg relative md:h-[50vh]  overflow-hidden   my-4 p-2">
//       <div className=" py-3 mx-5   md:flex  md:justify-between md:items-start">
//       <div className="w-[25vh] mx-auto md:mx-0  ">
//       <img src={Logo} className='h-full mx-6  md:cursor-pointer  '/>
//       </div>
//       <AboutUs/>
//    <div className="">
//    <FooterLink/>
//    </div>
//       </div>
//       <FootIcons/>
//      <div className="absolute  bottom-1   w-full ">
//      <hr className="border-gray-400   "/>
//      <div>
//         <h1 className="text-[0.62rem] text-gray-400 text-center mt-2">© 2024 Koning Lather & Clothing. All rights reserved.</h1>
//      </div>
//      </div>
     
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import Logo from "../../assets/white logo.png";
import FooterLink from "./FooterLink";
import "../../App.css";
import FootIcons from "./FootIcons";
import AboutUs from "../AboutUs/AboutUs";

const Footer = () => {
  return (
    <div className="footbg relative md:h-[32vh] overflow-hidden my-4 p-2">
      <div className="py-3 mx-5 md:flex md:justify-between md:items-start">
        {/* Logo */}
        <div className="w-[25vh]   flex justify-center items-center mx-auto md:mx-0">
          <img src={Logo} className=" md:cursor-pointer" />
        </div>

        {/* AboutUs */}
        <AboutUs />

        {/* Footer Links */}
        <div className="mt-4 md:mt-0">
          <FooterLink />
        </div>
      </div>

      <div className="mt-16  md:mt-0">
        <FootIcons />
      </div>

      <div className="absolute bottom-1 w-full">
        <hr className="border-gray-400" />
        <div>
          <h1 className="text-[0.62rem] text-gray-400 text-center mt-2">
            © 2024 Koning Lather & Clothing. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
