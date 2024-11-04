import React from 'react'
import { footerLinks } from './FootLinks'

const FooterLink = () => {
  return (
    <div className="flex text-white flex-col md:flex-row md:justify-center gap-16 w-full justify-center md:items-start  ">

    {footerLinks.map((footlink) => (
      <div className="flex flex-col justify-start h-full items-center  ">
        <h1 className="text-stone-400 uppercase text-lg font-semibold">
          {footlink.Head}
        </h1>
        <ul className="text-center text-sm my-1">
          {footlink?.links.map((link) => (
            <li className="my-2 capitalize">{link.name}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
}

export default FooterLink