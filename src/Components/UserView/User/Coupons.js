import React from 'react'
import { BsDot } from "react-icons/bs";

const Coupons = () => {

  const couponsArr = [1,2,3,4,5,6,7,8]

  const showDetails = (index) => {
    let allDetaildivs = [...document.querySelectorAll('.detailsDiv')]
    if(allDetaildivs[index].classList.contains("block"))
    {
      allDetaildivs[index].classList.replace("block", "hidden")
      return null
    }
    allDetaildivs.forEach((detailsDiv)=>{
      if(detailsDiv.classList.contains("block"))
        detailsDiv.classList.replace("block", "hidden")
    })
    allDetaildivs[index].classList.replace("hidden", "block")
  }

  return (
    <div>
      <div>
      { couponsArr.map((coupon,index) => 
          <div className='text-sm border-[1px] my-5 mx-6 px-3 text-[#7e818c]'>
            <div className='flex border-b-[1px]'>
              <div className='w-[15%] text-lg text-[#14cda8] font-bold flex items-center justify-center border-r-[1px]'>
                <p className=''>50% OFF</p>
              </div>
              <div>
                <div className='py-6 px-3'>
                  <p>On minimum purchase of Rs. 0</p>
                  <p>Code: <b>MINIKLUBOFF</b></p>
                </div>
              </div>
            </div>
            <div className='py-3 px-1'>
              <div className='flex items-center text-[#565a63]'>
                <p className='w-4/6 flex items-center'><p>Expiry:</p> <p className='text-[#696E79] font-bold px-2 border-r-[2px]'>JAN 24 2024</p> <p className='px-2'>11:59:00 P.M</p></p>
                <div className='w-2/6 flex justify-end gap-5 mx-2'>
                  <p className='flex items-center font-bold cursor-pointer text-[#526cd0]' onClick={()=>showDetails(index)}>Details</p>
                </div>
              </div>
              <div className='detailsDiv hidden'>
                <p className='flex items-center'><BsDot className='text-2xl text-black'/> <p>50% off</p></p>
              </div>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Coupons