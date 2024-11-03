import React, { useState } from 'react'
import { links } from './MyLinks'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";


const NavLinks = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
    return (
        <>
            {links.map(link => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7  flex justify-between items-center md:pr-0 pr-5 group ' onClick={() => {
                            heading !== link.name ? setHeading(link.name) : setHeading("");
                            setSubHeading("")
                        }}>{link.name}
                            <span className='text-xl md:hidden inline'>
                                {heading === link.name ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

                            </span>
                            <span className='text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                 <MdKeyboardArrowDown />

                            </span>
                        </h1>


                        {link.submenu && <div>
                            <div className='absolute top-22 hidden group-hover:md:block hover:md:block '>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                                </div>
                                <div className='bg-white p-5 grid grid-cols-3 gap-10 '>

                                    {
                                        link.sublinks.map((mysublinks) => (
                                            <div>
                                                <h1 className='text-lg font-semibold '>{mysublinks.Head}</h1>
                                                {mysublinks.sublink.map((slink) => (
                                                    <li className='text-sm text-gray-600 my-2.5'>
                                                        <a href={slink.link} className='hover:text-blue-600'>{slink.name}</a>
                                                    </li>
                                                ))}

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>}
                    </div>

                    {/* MOBILE MENU  */}

                    <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                        {link.sublinks.map((slinks) => {
                            return (
                                <div>
                                    <div>
                                        <h1 className='py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5' onClick={() =>
                                            subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                                        }>{slinks.Head}
                                            <span className='text-xl md:mt-1 md:ml-2 inline'>
                                                {subHeading === slinks.Head ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}

                                            </span>
                                        </h1>
                                        <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                            {slinks?.sublink.map((slink) => (
                                                <li className='py-3 pl-14'>
                                                    <a href={slink.link} className='hover:text-blue-500'>{slink.name}</a>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div >

                </div >
            ))}
        </>
    )
}

export default NavLinks