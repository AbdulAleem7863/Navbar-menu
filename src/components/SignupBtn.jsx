import React from 'react'
import { Link } from 'react-router-dom'

const SignupBtn = () => {
  return (
    <Link  to={'/login'} className=' '>
       {/* <button className='text-[#a16b24] className="transition-all hover:text-lg hover:scale-105 duration-300" text-base hover:text-lg bg-red-500 hover:underline font-extrabold px-6 py-2 rounded-full '>
        Signup
       </button> */}
       <button class="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    </Link>   
  )
}

export default SignupBtn