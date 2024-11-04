import React, { useState } from 'react';
import { links } from './MyLinks';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    // Function to handle main heading click
    const handleHeadingClick = (name) => {
        setHeading(heading !== name ? name : "");
        setSubHeading("");
    };

    // Function to handle subheading click in mobile view
    const handleSubHeadingClick = (name) => {
        setSubHeading(subHeading !== name ? name : "");
    };

    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7 text-white flex justify-between items-center md:pr-0 pr-5 group'
                            onClick={() => handleHeadingClick(link.name)}>
                            {link.name}
                            <span className='text-xl md:hidden inline'>
                                {heading === link.name ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </span>
                            <span className='text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                <MdKeyboardArrowDown />
                            </span>
                        </h1>

                        {link.submenu && (
                            <div className='absolute top-22 hidden group-hover:md:block hover:md:block'>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                </div>
                                <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                                    {link.sublinks.map((mysublinks, subIndex) => (
                                        <div key={subIndex}>
                                            <h1 className='text-lg font-semibold text-black'>{mysublinks.Head}</h1>
                                            {mysublinks.sublink.map((slink, subLinkIndex) => (
                                                <li key={subLinkIndex} className='text-sm my-2.5 text-black'>
                                                    <a href={slink.link} className='hover:text-[#7a6d29]'>{slink.name}</a>
                                                </li>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* MOBILE MENU */}
                    <div className={`${heading === link.name ? "md:hidden" : "hidden"} text-black`}>
                        {link.sublinks.map((slinks, subIndex) => (
                            <div key={subIndex} className=''>
                                <div className='text-black'>
                                    <h1 className='py-4 pl-7 font-semibold text-black flex justify-between items-center md:pr-0 pr-5'
                                        onClick={() => handleSubHeadingClick(slinks.Head)}>
                                        {slinks.Head}
                                        <span className='text-xl md:mt-1 md:ml-2 inline text-black'>
                                            {subHeading === slinks.Head ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                        </span>
                                    </h1>
                                    <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                        {slinks?.sublink.map((slink, subLinkIndex) => (
                                            <li key={subLinkIndex} className='py-3 pl-14 text-black'>
                                                <a href={slink.link} className='hover:text-[#7a6d29]'>{slink.name}</a>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default NavLinks;