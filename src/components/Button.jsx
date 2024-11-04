import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to={'/login'} className='bg-[#F4CE14] hover:bg-[#f5d64c] px-6 py-2 rounded-full  text-gray-700'>
       Login | Signup
    </Link                                                                                                                                                          >
  )
}

export default Button