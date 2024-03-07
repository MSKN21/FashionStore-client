import React from 'react'
import { HiOutlineStar } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Img1 from "../../../Images/Others/shirt1.avif"
import { HiStar } from "react-icons/hi2";

const OrderCard = (props) => {
  return (
    <div id='orderCard' className='py-3 px-6 my-3 bg-white'>
        <div className='flex item-center text-sm pb-2'>
            <div className='w-[8%] flex items-center justify-center'>
                <FiBox className='text-4xl bg-[#552956] p-[6px] rounded-[50%] text-white'/>
            </div>
            <div className='ml-2'>
                <p className="font-bold text-[#03a685]">Delivered</p>
                <p className='text-[#686b77]'>On Tue, 1 Aug 2023</p>
            </div>
        </div>
        <div className='flex my-[2px] p-3 items-center rounded cursor-pointer bg-[#f5f5f5] hover:bg-[#e3e3e3] duration-300'>
            <div className='w-[10%]'>
                <img src={Img1} alt='ShirtImage'/>
            </div>
            <div className='text-sm pl-6 w-[80%]'>
                <p className='font-bold'>Campus Sutra</p>
                <p className='pt-[2px]'>Men Blue Colourblocked Cotton Pure Cotton T-shirt</p>
                <p className='pt-[2px]'>Size: <span>XL</span></p>
            </div>
            <div className='flex items-center justify-center w-[10%]'>
                <FiChevronRight className='text-2xl text-[#696e79]'/>
            </div>
        </div>
        <div>
            <div className='flex my-[2px] p-3 items-center rounded text-sm bg-[#f5f5f5] text-[#696e79]'>
                <p className='pl-2'><GoDotFill className='text-lg'/></p>
                <p className='pl-2'>Exchange/Return window closed on Tue, 15 Aug 2023</p>
            </div>
        </div>
        <div className='flex my-[2px] px-3 py-3 items-center rounded bg-[#f5f5f5]'>
            <div className='flex w-[80%]'>
                <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
                <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
                <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
                <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
                <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
                {/* <HiStar className='text-2xl cursor-pointer text-[#ff3f6c]'/> */}
            </div>
            <div className='text-center w-[20%] text-[#ff3f6c] font-bold text-sm cursor-pointer' onClick={()=>props.toggleViewReview()}>Write Review</div>
        </div>
    </div>
  )
}

export default OrderCard