import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { IoShieldCheckmark } from "react-icons/io5";


const Footer = () => {

  const searchLinks =["Makeup" , "Dresses For Girls" , "T-Shirts" , "Sandals" , "Headphones" , "Babydolls" , "Blazers For Men" ,
   "Handbags" , "Ladies Watches" , "Bags" , "Sport Shoes" , "Reebok Shoes" , "Puma Shoes" , "Boxers" , "Wallets" , "Tops" , "Earrings" ,
   "Makeup" , "Dresses For Girls" , "T-Shirts" , "Sandals" , "Headphones" , "Babydolls" , "Blazers For Men" ,
   "Handbags" , "Ladies Watches" , "Bags" , "Sport Shoes" , "Reebok Shoes" , "Puma Shoes" , "Boxers" , "Wallets" , "Tops" , "Earrings" ,
   "Makeup" , "Dresses For Girls" , "T-Shirts" , "Sandals" , "Headphones" , "Babydolls" , "Blazers For Men" ,
   "Handbags" , "Ladies Watches" , "Bags" , "Sport Shoes" , "Reebok Shoes" , "Puma Shoes" , "Boxers" , "Wallets" , "Tops" , "Earrings" ]

  return (
    <div className="bg-[#F3F3F3] w-full">
      <div className="w-8/12 mx-auto py-10">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:w-[80%] xl:w-full xl:grid-cols-4'>
          <div className='py-3 md:py-0'>
            <h1 className='font-bold text-sm'>ONLINE&nbsp;SHOPPING</h1>
            <div className='my-5 font-semibold text-[#6E6F74] text-sm flex flex-col gap-1'>
              <p className='cursor-pointer hover:text-[#000000]'>Men</p>
              <p className='cursor-pointer hover:text-[#000000]'>Women</p>
              <p className='cursor-pointer hover:text-[#000000]'>Kids</p>
              <p className='cursor-pointer hover:text-[#000000]'>Home&nbsp;&&nbsp;Living</p>
            </div>
          </div>
          <div className='py-3 md:py-0'>
            <h1 className='font-bold text-sm'>CUSTOMER&nbsp;POLICIES</h1>
            <div className='my-5 font-semibold text-[#6E6F74] text-sm flex flex-col gap-1'>
              <p className='cursor-pointer hover:text-[#000000]'>Contact Us</p>
              <p className='cursor-pointer hover:text-[#000000]'>T&C</p>
              <p className='cursor-pointer hover:text-[#000000]'>Terms Of Use</p>
              <p className='cursor-pointer hover:text-[#000000]'>Track Orders</p>
              <p className='cursor-pointer hover:text-[#000000]'>Shipping</p>
              <p className='cursor-pointer hover:text-[#000000]'>Cancellation</p>
              <p className='cursor-pointer hover:text-[#000000]'>Returns</p>
              <p className='cursor-pointer hover:text-[#000000]'>Privacy policy</p>
            </div>
          </div>
          <div className='py-3 xl:py-0'>
            <h1 className='font-bold text-sm'>KEEP&nbsp;IN&nbsp;TOUCH</h1>
            <div className='flex my-5 text-[#6E6F74] gap-4 text-3xl'>
              <div className='cursor-pointer hover:text-[#000000]'>
                <AiFillFacebook/>
              </div>
              <div className='cursor-pointer hover:text-[#000000]'>
                <FaTwitter/>
              </div>
              <div className='cursor-pointer hover:text-[#000000]'>
                <GrYoutube/>
              </div>
              <div className='cursor-pointer hover:text-[#000000]'>
                <FaInstagramSquare/>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-7 py-5 xl:py-0'>
            <div className='flex'>
              <p className='text-5xl text-[#6E6F74]'><IoShieldCheckmark/></p>
              <p className=' text-md px-2 font-medium'><span className='font-bold'>100% ORIGINAL</span> guarantee for all products at fashionstore.com</p>
            </div>
            <div className='flex'>
              <p className='text-5xl text-[#6E6F74]'><PiArrowsCounterClockwiseBold/></p>
              <p className=' text-md px-2 font-medium'><span className='font-bold'>Return within 14days</span> of receiving your order</p>
            </div>
          </div>
        </div>
        <div className='w-[100%] mx-auto border-b-[1px] border-[#69696950]'></div>
        <div className='w-[100%] mx-auto'>
            <div>
              <h1 className='font-bold text-sm py-2'>POPULAR SEARCHES</h1>
              <p className='text-[#6E6F74] text-sm font-semibold py-2'>
                {
                  searchLinks.map((link,i) => i < searchLinks.length-1 ? <><span className='cursor-pointer hover:text-black'>{link}</span> <span> | </span></>  : <span className='cursor-pointer hover:text-black'>{link}</span>)
                }
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 text-sm font-semibold text-[#6E6F74] justify-center py-3 pt-10'>
              <p className='py-2 sm:text-left'>In case of any concern, <span className='text-blue-400 cursor-pointer hover:text-blue-500'>Contact Us</span> </p>
              <p className='py-2 sm:text-center'>© 2023 www.fashionstore.com. All rights reserved.</p>
              <p className='py-2 sm:text-right'>A E-Commerce Site</p>
            </div>
        </div>
        <div className='w-[100%] mx-auto border-b-[1px] border-[#69696950]'></div>
        <div className='w-[100%] mx-auto'>
            <div>
              <h1 className='font-bold text-sm text-[#56575D] pt-5'>SHOP ONLINE AT FASHION STORE WITH COMPLETE CONVENIENCE</h1>
              <p className='text-[#6E6F74] text-sm py-2'>
                Another reason why Fashionstore is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
              </p>
              <p className='text-[#6E6F74] text-sm py-2'>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer