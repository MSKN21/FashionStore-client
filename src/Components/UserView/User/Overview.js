import React from 'react'
import { FiBox } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Overview = () => {

  const arr=[1,2,3,4,5,67,8]

  return (
    <div>
      <div className='w-11/12 mx-4 text-[#282c3f]'>
        <div className='flex my-4 p-7 items-center rounded cursor-pointer bg-[#F5F5F6] hover:bg-[#e3e3e3] duration-300'>
          <div className='w-[20%]'>
            <div className='bg-[#0000005b] h-[125px] w-[125px]'></div>
          </div>
          <div className='text-sm pl-10 w-[60%]'>
            <p className='font-bold'>Sai Krupananda</p>
            <p className='pt-[2px]'>saikrupananda21@gmail.com</p>
            <p className='pt-[2px]'>Male</p>
          </div>
          <div className='flex justify-center w-[20%]'>
            <p className='text-[11px] font-bold border-[1px] border-[#3E4152] px-2 py-1'>EDIT PROFILE</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 my-10'>
          {
            arr.map(()=> <div className='py-14 border-[1px] cursor-pointer hover:bg-[#e3e3e3] duration-300 w-[220px]'>
                <div className='flex justify-center'><FiBox className='text-4xl mb-3'/></div>
                  <h2 className='font-bold text-center text-base'>Orders</h2>
                  <p className='text-xs text-[#94969F] text-center'>Check your order status</p>
                </div>
              )
          }
        </div>
        <div>
          <NavLink to={"/login"} className='text-sm bg-[#ff5a5a] rounded font-bold text-center py-3 px-10 my-4 text-white w-fit cursor-pointer'>LOGOUT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Overview