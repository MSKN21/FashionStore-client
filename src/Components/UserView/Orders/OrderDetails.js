import React, { useState } from 'react'
import Img1 from "../../../Images/Others/shirt1.avif"
import { FiBox } from "react-icons/fi";
import { HiOutlineStar } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";

const OrderDetails = () => {

  const [viewBreakup,setViewBreakup] = useState(false);

  const toggleViewBreakup = () =>{
    setViewBreakup(!viewBreakup)
  }

  return (
    <div id="OrderDetails" className='m-6 bg-[#f5f5f5] p-1'>
      <div className='my-[2px] p-3 items-center rounded cursor-pointer bg-[#f5f5f5]'>
        <div className='w-[15%] mx-auto my-5'>
            <img src={Img1} alt='ShirtImage'/>
        </div>
        <div className='text-sm text-center w-full'>
            <p className='font-bold'>Campus Sutra</p>
            <p className='pt-1'>Men Blue Colourblocked Cotton Pure Cotton T-shirt</p>
            <p className='pt-1'>Size: <span>XL</span></p>
        </div>
      </div>
      <div className='flex item-center text-sm py-2 rounded mx-5 bg-[#03a685] text-white'>
        <div className='w-[8%] flex items-center justify-center'>
          <FiBox className='text-4xl p-[6px] rounded-[50%] '/>
        </div>
        <div className='ml-2'>
          <p className="font-bold">Delivered</p>
          <p className=''>On Tue, 1 Aug 2023</p>
        </div>
      </div>

      <div>
        <div className='flex my-4 p-3 items-center rounded text-sm bg-[#ffffff] text-[#696e79]'>
          <p className='pl-2'><GoDotFill className='text-lg'/></p>
          <p className='pl-2'>Exchange/Return window closed on Tue, 15 Aug 2023</p>
        </div>
      </div>
      <div className='flex my-4 px-4 py-3 items-center rounded bg-[#ffffff]'>
        <div className='flex w-[80%]'>
          <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
          <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
          <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
          <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
          <HiOutlineStar className='text-2xl cursor-pointer text-[#ff3f6c]'/>
          {/* <HiStar className='text-2xl cursor-pointer text-[#ff3f6c]'/> */}
        </div>
        <div className='text-right w-[20%] text-[#ff3f6c] font-bold text-sm cursor-pointer'>Write Review</div>
      </div>

      <div className='bg-white px-5 py-4 my-4'>
        <h2 className='font-bold text-lg'>Delivery Address</h2>
        <p className='font-bold pt-3 text-xs'>M SAIKRUPANANDA&nbsp;|&nbsp;8688554605</p>
        <p className='pt-1 text-sm'>Flat no.302, tirumala Towers,near sgs arts college, Lakshmi puram circle,tirupati, andhra Pradesh. , TIRUPATHI , Tirupathi - 517501</p>
      </div>

      <div className='bg-white px-5 py-4 my-4'>
        <div className='flex text-sm'>
          <div className='w-1/2'>
            <p className='font-bold'>Total Order Price</p>
            <p className=''>You saved <span className='text-[#03A685] font-bold'>₹ 522.00</span> on this order</p>
          </div>
          <div className='w-1/2 text-right'>
            <p className='font-bold'>₹ 447.00</p>
            <p className='font-bold cursor-pointer text-[#ff3f6c]' onClick={()=>toggleViewBreakup()}>View Breakup</p>
          </div>
        </div>
        <div className='bg-[#f5f5f5] rounded-sm py-3 px-3 my-4 pl-4 flex items-center text-sm'>
          <LiaMoneyBillWaveSolid className='text-xl'/>
          <p className='pl-4'>Pay on delivery.</p>
        </div>
      </div>

      <div className='bg-white px-5 py-4 my-4'>
        <p className='text-[#696e79] text-sm'>Item sold by: Flashstar Commerce</p>
        <p className='w-full text-center text-sm font-bold border-[1px] cursor-pointer rounded-md py-2 mt-5 hover:border-black'>Get Invoice</p>
      </div>

      <div className='bg-white px-5 py-4 my-4'>
        <h2 className='font-bold text-lg'>Updates sent to</h2>
        <p className='text-[#696e79] text-sm py-1 pt-3 flex items-center'>
          <FiPhone />
          <p className='pl-2'>8688554605</p>
        </p>
        <p className='text-[#696e79] text-sm py-1 flex items-center'>
          <CiMail />
          <p className='pl-2'>saikrupananda21@gmail.com</p>
        </p>
      </div>

      <div className='bg-white px-5 py-4 my-4'>
        <p className='text-[#696e79] text-sm'>Order ID # 1242327 49962222478601</p>
      </div>

      {
        viewBreakup && <div className='fixed z-[60] top-0 left-0 h-full w-full bg-[#00000052] flex items-center justify-center'>
          <div className='w-3/12 bg-white text-sm p-5 rounded-md'>
            <div className='flex items-center text-lg'>
              <p className='w-[80%] font-bold'>Payment Information</p>
              <p className='w-[20%] flex justify-end'><IoClose className='text-xl cursor-pointer' onClick={()=>toggleViewBreakup()}/></p>
            </div>
            <div className='flex items-center py-2 mt-3'>
              <p className='w-[80%] text-[#696e79]'>1 x Campus Sutra Men Blue Colourblocked Cotton Pure</p>
              <p className='w-[20%] flex justify-end font-bold'>₹949.00</p>
            </div>
            <div className='flex items-center py-2 border-b-[1px]'>
              <p className='w-[80%] text-[#696e79]'>Discount</p>
              <p className='w-[20%] flex justify-end font-bold'>-₹522.00</p>
            </div>
            <div className='flex items-center py-3 border-b-[1px]'>
              <p className='w-[80%] text-[#696e79]'>Discounted Price</p>
              <p className='w-[20%] flex justify-end font-bold'>₹427.00</p>
            </div>
            <div className='flex items-center py-2'>
              <p className='w-[80%] text-[#696e79]'>Shipping Fee</p>
              <p className='w-[20%] flex justify-end font-bold'>₹10.00</p>
            </div>
            <div className='flex items-center py-2 border-b-[1px]'>
              <p className='w-[80%] text-[#696e79]'>Cash/Pay On Delivery</p>
              <p className='w-[20%] flex justify-end font-bold'>₹10.00</p>
            </div>
            <div className='flex items-center py-2 text-base'>
              <p className='w-[80%] font-bold'>Total Paid</p>
              <p className='w-[20%] flex justify-end font-bold'>₹447.00</p>
            </div>
            <div className='bg-[#f5f5f5] rounded-sm py-3 px-3 my-4 pl-4 flex items-center text-sm'>
              <LiaMoneyBillWaveSolid className='text-xl'/>
              <p className='pl-4'>Pay on delivery.</p>
            </div>
            <p className='w-full text-center text-sm font-bold border-[1px] cursor-pointer rounded-md py-2 mt-5 hover:border-black'>Get Invoice</p>
          </div>
        </div>
      }
    </div>
  )
}

export default OrderDetails