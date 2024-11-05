import React from 'react'
import { footerLinks } from './FootLinks'

const FooterLink = () => {
  return (
    <div className=" flex  text-white flex-col md:flex-row gap-16 w-full justify-center md:items-start  ">

    {footerLinks.map((footlink,i) => (
      <div key={i} className="flex flex-col justify-between h-full items-center  ">
        <h1 className="text-stone-400 uppercase md:text-base text-lg font-semibold">
          {footlink.Head}
        </h1>
        <ul className="text-center text-[0.7rem] my-1">
          {footlink?.links.map((link,i) => (
            <li key={i} className="my-2 capitalize ">{link.name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default FooterLink