import React, { useEffect, useState } from 'react'
import { SlUser } from "react-icons/sl";
import { MdLockOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { IoLogoGoogle } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addUser,getUsers } from '../../Features/Auth/userSlice';

const SignUp = (props) => {

  const users = useSelector(state=>state.users)
  console.log(users);
  const dispatch = useDispatch()

  const [userName,setUserName] = useState(null);
  const [userEmail,setUserEmail] = useState(null);
  const [userPassword,setUserPassword] = useState(null);
  const [userPhone,setUserPhone] = useState(null);

  const addUserHandler = (e) =>{
    e.preventDefault();
    const newUserObj = {
      userName:userName,
      userEmail:userEmail,
      userPassword:userPassword,
      userPhone:userPhone
    }
    dispatch(addUser(newUserObj));
    setUserName("");
    setUserEmail("");
    setUserPassword("");
    setUserPhone("");
  }

  useEffect(()=>{
    dispatch(getUsers(null))
  },[])

  return (
    <div className='w-full h-[80vh] shadow-custom-lg-div mx-28 rounded bg-white'>
      <div className='px-14'>
        <h1 className="font-bold text-3xl text-center mt-8">Create Account</h1>
        <div className='mt-7 py-2'>
          <p className='font-semibold'>Username*</p>
          <div className='flex border-b-[1px] items-center px-2'>
            <SlUser className='text-xl text-[#6E6F74]'/>
            <input placeholder='Type your username' value={userName} onChange={(e)=>setUserName(e.target.value)} className='ml-3 p-2 focus:outline-none'/>
          </div>
        </div>
        <div className='py-2'>
          <p className='font-semibold'>Mail*</p>
          <div className='flex border-b-[1px] items-center px-2'>
            <FiMail className='text-xl text-[#6E6F74]'/>
            <input placeholder='Type your mail' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} className='ml-3 p-2 focus:outline-none'/>
          </div>
        </div>
        <div className='py-2'>
          <p className='font-semibold'>Password*</p>
          <div className='flex border-b-[1px] items-center px-2'>
            <MdLockOutline className='text-xl text-[#6E6F74]'/>
            <input placeholder='Type your password' type="password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} className='ml-3 p-2 focus:outline-none'/>
          </div>
        </div>
        <div className='py-2'>
          <p className='font-semibold'>Phone*</p>
          <div className='flex border-b-[1px] items-center px-2'>
            <FiPhone className='text-xl text-[#6E6F74]'/>
            <input placeholder='Type your phone number' value={userPhone} onChange={(e)=>setUserPhone(e.target.value)} className='ml-3 p-2 focus:outline-none'/>
          </div>
        </div>
        <div className='my-3 w-full'>
          <p onClick={(e)=>addUserHandler(e)} className='bg-[#d03357] block w-full cursor-pointer rounded text-white text-center font-bold py-2 hover:bg-[#ac3c56d7]'>REGISTER</p>
        </div>
        <div className='my-5'>
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
        <div className='text-center mt-11'>
          <p className='text-[#6E6F74] font-semibold'>Already Have An Account</p>
          <p className='font-bold text-sm pt-1 cursor-pointer hover:text-[#3a3a3a]' onClick={()=>props.switchAuthToggle()}>SIGN IN</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp