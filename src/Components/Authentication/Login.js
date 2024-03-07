import React from 'react'
import { SlUser } from "react-icons/sl";
import { MdLockOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { IoLogoGoogle } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className='w-full h-[75vh] shadow-custom-lg-div mx-28 rounded bg-white'>
      <div className='px-14'>
        <h1 className="font-bold text-3xl text-center mt-16">Login</h1>
        <div className='mt-5 py-2'>
          <p className='font-semibold'>Username</p>
          <div className='flex border-b-[1px] items-center px-2'>
            <SlUser className='text-xl text-[#6E6F74]'/>
            <input placeholder='Type your username' className='ml-3 p-2 focus:outline-none'/>
          </div>
        </div>
        <div className='py-2'>
          <p className='font-semibold'>Password</p>
          <div className='flex border-b-[1px] items-center px-2'>
            <MdLockOutline className='text-xl text-[#6E6F74]'/>
            <input placeholder='Type your password' type="password" className='ml-3 p-2 focus:outline-none'/>
          </div>
        </div>
        <div>
          <p className='text-right cursor-pointer text-[#6E6F74] hover:text-[#888889e9] font-semibold'>Forgot password?</p>
        </div>
        <div className='my-3 w-full'>
          <NavLink to={"/"} className='bg-[#d03357] block w-full cursor-pointer rounded text-white text-center font-bold py-2 hover:bg-[#ac3c56d7]'>LOGIN</NavLink>
        </div>
        <div className='my-10'>
          <p className='text-center text-[#6E6F74] font-semibold'>Or Sign Up Using</p>
          <div className='flex my-3 gap-4 text-3xl justify-center'>
            <div className='cursor-pointer'>
              <IoLogoGoogle className='bg-[#6E6F74] text-white text-4xl p-2 rounded-[50%] hover:bg-[#414143]'/>
            </div>
            <div className='cursor-pointer'>
              <CgFacebook className='bg-[#6E6F74] text-white text-4xl p-2 rounded-[50%] hover:bg-[#414143]'/>
            </div>
            <div className='cursor-pointer'>
              <FaTwitter className='bg-[#6E6F74] text-white text-4xl p-2 rounded-[50%] hover:bg-[#414143]'/>
            </div>
          </div>
        </div>
        <div className='text-center mt-20'>
          <p className='text-[#6E6F74] font-semibold'>Or Sign Up Using</p>
          <p className='font-bold text-sm pt-1 cursor-pointer hover:text-[#3a3a3a]' onClick={()=>props.switchAuthToggle()}>SIGN UP</p>
        </div>
      </div>
    </div>
  )
}

export default Login