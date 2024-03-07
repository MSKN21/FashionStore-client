import React from 'react'
import { BsCardText } from "react-icons/bs";

const ProductSpecs = () => {
  return (
    <div className='border-b-[1px] border-[#d4d5d9]'>
      <div className='w-11/12 py-6'>
        <h1 className='font-[700] text-base flex items-center'><p>PRODUCT DETAILS</p> <BsCardText className='text-xl ml-3'/> </h1>
        <div className='text-base mt-5'>
          <b>Product design details</b>
          <p>Lightweight jacket provides insulation and helps maintain body temperature in mild cold</p>
          <p>Breathable fabric helps sweat dry fast.</p>
          <p>Zippered pockets keep your essentials safe</p>
          <p>Style: Full Front Open Zipper</p>
          <p>Sleeve: Full Sleeves</p>
          <p>Colour: Olive green</p>
          <p>Fit: Regular</p>
        </div>
        <div className='text-base mt-5'>
          <b>About HRX by Hrithik Roshan Active Bomber Jacket</b>
          <p>The HRX Men's Running Jacket - lightweight yet sturdy; breathable yet warm - just right for a quick run before the weather gets really cold.</p>
        </div>
        <div className='text-base mt-5'>
          <b>Size & Fit</b>
          <p>The model (height 6') is wearing a size M</p>
        </div>
        <div className='text-base mt-5'>
          <b>Material & Care</b>
          <p>100% polyester</p>
          <p>Machine-wash</p>
        </div>
        <div className='text-base mt-5'>
          <p className='pb-3 font-bold'>Specifications</p>
          <div className='grid grid-cols-2 gap-5'>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Sleeve Length</p>
              <p>Long Sleeves</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Type</p>
              <p>Bomber</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Collar</p>
              <p>Stand Collar</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Print or Pattern Type</p>
              <p>Solid</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Sleeve Length</p>
              <p>Long Sleeves</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Type</p>
              <p>Bomber</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Collar</p>
              <p>Stand Collar</p>
            </div>
            <div className='pb-2 border-[#d4d5d994] border-b-[1px] mr-10'>
              <p className='text-[#7e818c] text-xs pb-1'>Print or Pattern Type</p>
              <p>Solid</p>
            </div>
          </div>
        </div>
        <div className='text-base mt-5'>
          <b>Complete The Look</b>
          <p>This fashionable olive green jacket will elevate your overall style. Pair this HRX by Hrithik Roshan jacket with a cool T-shirt and trim denims when you're going out for drinks with the boys.</p>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecs