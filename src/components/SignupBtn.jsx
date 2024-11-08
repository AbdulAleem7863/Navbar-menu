import React from 'react'
import { Link } from 'react-router-dom'

const SignupBtn = () => {
  return (
    <Link to={'/signup'} className=' '>
      <div className=" ">
        <button className="text-yellow-800 font-extrabold text-base hover:text-xl w-32 h-12">Signup</button>
      </div>
      {/* <button class="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Button
      </button> */}
    </Link>
  )
}

export default SignupBtn