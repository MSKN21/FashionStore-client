import React from 'react'
import Img1 from "../../../Images/Others/shirt1.avif"
import { IoClose } from "react-icons/io5";

const WishlistItemCard = () => {
  return (
    <div id='wishlistItemCard' className='bg-[#ffffff] w-[220px] h-[430px] rounded-sm border-[1px]'>
        <div className="relative h-[300px]">
            <img src={Img1} className='absolute w-full h-full'/>
            <p className='absolute flex w-full justify-end'><IoClose className='bg-[#ffffffd6] p-[2px] rounded-[50%] text-xl m-[6px] cursor-pointer'/></p>
        </div>
        <div className='text-base mx-2'>
            <p className='truncate my-2'>Men Blue & Black Typography Printed T-shirt</p>
            <div id="priceSection" className='flex items-center justify-center text-sm'>
                <p className='text-[#282c3f] font-[700] mr-2'>₹1399</p>
                <p className='text-[#535665] mr-2 text-xs font-semibold'><s>Rs 3999</s></p>
                <p className='font-[700] text-[#ff905a]'>(65% OFF)</p>
            </div>
        </div>
        <div>
            <p className='text-sm text-[#ff3e6c] font-bold text-center py-3 border-t-[1px] mt-5 cursor-pointer'>MOVE TO CART</p>
        </div>
    </div>
  )
}

export default WishlistItemCard