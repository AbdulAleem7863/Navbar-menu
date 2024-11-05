import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
  return (
    <Link  to={'/login'} className='bg-[#ad8242] text-sm  mx-1 text-white hover:bg-[#886634] px-6 py-2 rounded-full  '>
       Login
    </Link>   
  )
}

export default LoginBtn