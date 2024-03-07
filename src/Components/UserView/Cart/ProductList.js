import React from 'react'
import { GoTag } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Img1 from "../../../Images/Others/shirt1.avif"
import { PiKeyReturn } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCaretDown } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const ProductList = () => {

  const productList = [1,2]

  return (
    <div className='w-full flex justify-center border-t-[1px] text-[#282c3f]'>
      <div className='w-4/6 px-3 border-r-[1px]'>
        <div className='flex items-center border-[1px] rounded-sm p-3 text-xs my-5'>
          <div className='w-[75%] px-2'>
            <p className='text-sm'>Deliver to: <span className='font-bold'>M SAIKRUPANANDA , 560064</span></p>
            <p className='truncate pt-[2px]'>Flat no.402 , 4th floor , sai sri lakshmi narasimha pg for men , 20 chowdeshwari layout , bhoganahalli Road ambedkar circle , devarabisanahalli</p>
          </div>
          <div className='w-[25%] flex justify-center'>
            <p className='w-fit text-xs font-bold border-[1px] text-center cursor-pointer px-4 py-2 rounded-sm border-[#ff3f6c] text-[#ff3f6c]'>CHANGE ADDRESS</p>
          </div>
        </div>

        <div className='flex items-center py-2'>
          <div className='w-1/2 flex justify-start items-center text-base ml-2'>
            <p><input  type='checkbox' className='cursor-pointer h-4 w-4 mt-2 accent-[#ec5175]'/></p>
            <p className='font-bold ml-3'>1/2 ITEMS SELECTED</p>
          </div>
          <div className='w-1/2 flex justify-end text-xs font-bold text-[#535766]'>
            <p className='px-4 cursor-pointer border-r-[2px] border-[#535766]'>REMOVE</p>
            <p className='px-4 cursor-pointer'>MOVE TO WISHLIST</p>
          </div>
        </div>

        <div>
          {
            productList.map((product) => 
            <div className='flex my-3 p-3 rounded bg-[#ffffff] border-[1px] relative'>
              <div className='w-[21%] relative'>
                  <img src={Img1} alt='ShirtImage' className='absolute'/>
                  <p className='absolute z-40'>
                    <input  type='checkbox' className='cursor-pointer h-4 w-4 m-1 accent-[#ec5175]'/>
                  </p>
              </div>
              <div className='text-sm pl-4 w-[79%]'>
                  <p className='font-bold'>Campus Sutra</p>
                  <p className='pt-[2px]'>Men Blue Colourblocked Cotton Pure Cotton T-shirt</p>
                  <p className='pt-[2px] text-xs'>Sold by : Omnitech Retail</p>
                  <div className='flex items-center gap-2 mt-2'>
                    <div className='flex items-center gap-[2px] cursor-pointer text-sm w-fit py-[2px] px-2 rounded-sm bg-[#e3e3e3]'>
                      <p className='font-bold'>Size : XL</p>
                      <p><IoCaretDown/></p>
                    </div>
                    <div className='flex items-center gap-[2px] cursor-pointer text-sm w-fit py-[2px] px-2 rounded-sm bg-[#e3e3e3]'>
                      <p className='font-bold'>Qty : 1</p>
                      <p><IoCaretDown/></p>
                    </div>
                  </div>
                  
                  <div className='flex items-center pt-1'>
                    <p className='text-[#282c3f] text-sm font-[700] mr-2'>₹1399</p>
                    <p className='text-xs text-[#535665] mr-2'><s>3999</s></p>
                    <p className='text-sm font-[700] text-[#ff905a]'>(65% OFF)</p>
                  </div>
                  <div className='flex items-center gap-2 pt-[2px] text-sm'>
                    <PiKeyReturn/>
                    <p><span className='font-bold'>14 days</span> return available</p>
                  </div>
                  <div className='flex items-center gap-2 pt-[2px] text-sm'>
                    <TbTruckDelivery/>
                    <p>Delivery by <span className='font-bold'>21 Feb</span></p>
                  </div>
              </div>
              <div className='absolute w-[96%] flex justify-end'>
                <IoCloseOutline className='text-2xl cursor-pointer'/>
              </div>
            </div>) 
          }
        </div>

        <div className='flex items-center text-sm p-3 border-[1px] rounded-sm my-5'>
          <p className='w-[4%] flex justify-start'><FaRegBookmark className=''/></p>
          <p className='font-bold w-[86%] hover:underline cursor-pointer'>Add More From Wishlist</p>
          <p className='w-[10%] flex justify-end'><FaAngleRight/></p>
        </div>
      </div>
      <div className='w-2/6 pl-5'>
        <div className='text-sm my-5'>
          <h1 className='text-[#535766] font-bold mb-3 pl-1'>COUPONS</h1>
          <div className='flex items-center border-b-[1px] pb-4'>
            <GoTag className='w-[10%] text-black text-lg'/>
            <p className='font-bold w-[70%] pl-3'>Apply Coupons</p>
            <p className='w-[20%] text-xs font-bold border-[1px] cursor-pointer text-center px-2 py-1 rounded-sm border-[#ff3f6c] text-[#ff3f6c]'>APPLY</p>
          </div>
        </div>
        <div className='text-sm'>
          <h1 className='font-bold text-xs text-[#535766]'>PRICE DETAILS (2 Items)</h1>
          <div className='flex items-center py-1 mt-3'>
            <p className='w-[80%] text-[#696e79]'>Total MRP</p>
            <p className='w-[20%] flex justify-end font-semibold'>₹949.00</p>
          </div>
          <div className='flex items-center py-1'>
            <p className='w-[80%] text-[#696e79]'>Discount on MRP</p>
            <p className='w-[20%] flex justify-end font-semibold text-[#03a685]'>-₹522.00</p>
          </div>
          <div className='flex items-center py-1'>
            <p className='w-[80%] text-[#696e79]'>Coupon Discount</p>
            <p className='w-[20%] flex justify-end font-semibold text-[#ff3f6c]'>Apply&nbsp;Coupon</p>
          </div>
          <div className='flex items-center py-1'>
            <p className='w-[80%] text-[#696e79]'>Platform Fee</p>
            <p className='w-[20%] flex justify-end font-semibold'>₹10.00</p>
          </div>
          <div className='flex items-center py-1'>
            <p className='w-[80%] text-[#696e79]'>Shipping Fee</p>
            <p className='w-[20%] flex justify-end font-semibold'>FREE</p>
          </div>

          <div className='flex items-center mt-3 pt-3 py-[2px] text-[#3e4152] font-bold text-[15px] border-t-[1px]'>
            <p className='w-[80%] text-[#696e79]'>Total Amount</p>
            <p className='w-[20%] flex justify-end font-bold'>₹1,761</p>
          </div>
        </div>
        <div className='my-4 text-sm'>
          <p className='bg-[#d03357] cursor-pointer rounded-sm text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PLACE ORDER</p>
        </div>
      </div>
    </div>
  )
}

export default ProductList