import React from 'react'
import { LuRefreshCw } from "react-icons/lu";

const CodPayment = () => {
  return (
    <div className='p-5'>
        <h1 className='text-[#424553] text-base font-bold mb-5'>Cash On Delivery (Cash/UPI)</h1>
        <div className='flex items-center py-3'>
        <div className='w-4/6'>
            <div className='w-full h-14 border-[1px] border-[#424553] rounded'></div>
        </div>
        <div className='px-5'><LuRefreshCw className='text-2xl cursor-pointer'/></div>
        </div>
        <div className='my-5'>
        <div className='w-full border-[1px] border-[#d4d5d9] rounded-md'>
            <input className='focus:outline-none text-sm w-[95%] py-3 ml-3' placeholder='Enter the code shown in above image*'/>
        </div>
        <p className='text-xs py-2'>You can pay via Cash/UPI on delivery</p>
        </div>
        <div className='my-4 text-sm'>
        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-4 hover:bg-[#ac3c56d7]'>PLACE ORDER</p>
        </div>
    </div>
  )
}

export default CodPayment