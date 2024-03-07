import React, { useState,useEffect } from 'react'
import Img1 from "../../../Images/Others/shirt1.avif"
import { FaStar } from "react-icons/fa";

const SimilarProducts = () => {
  return (
    <div className='productCard mx-4 my-4 h-[43vh] max-h-[43vh] min-w-[230px] max-w-[230px] border-[1px] hover:shadow-xl duration-300 cursor-pointer'>
      <div className='relative'>
        <div className='staticImage absolute h-[35vh] w-full'>
          <img src={Img1} className="absolute object-fit h-full w-full block"/>
          <div className='absolute flex items-end h-[35vh]'>
            <div className='px-2 py-1 flex items-center w-fit bg-[#ffffffc3] text-xs rounded-[2px] ml-4 mb-3'>4.1 <FaStar className='text-lg px-[2px] text-[#7E818C]'/> | 21.6K</div>
          </div>
        </div>
        <div className='absolute flex items-end h-[43vh] border-b-[1px] w-full'>
          <div className='px-2 bg-white w-full'>
            <div className=''>
              <p className='font-bold pt-1'>Roadster</p>
              <p className='text-sm'>Men Pure Cotton Casual Shirt</p>
            </div>
            <div className='flex items-center pt-1 pb-1'>
              <p className='text-sm font-bold'>Rs. 779 <span className='text-xs pl-1 text-[#7E818C] line-through'>Rs.1299</span></p>
              <p className='text-xs pl-1 text-[#FF905A]'>(40% OFF)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimilarProducts