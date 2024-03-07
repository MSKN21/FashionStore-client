import React from 'react'
import { GrCreditCard } from "react-icons/gr";

const CardPayment = () => {
  return (
    <div className='p-5'>
        <h1 className='text-[#424553] text-base font-bold mb-5'>CREDIT/DEBIT CARD</h1>
        <p className='my-5 text-xs font-semibold pl-1'>Please ensure your card can be used for online transactions.</p>
        <div className='w-full border-[1px] border-[#d4d5d9] rounded-md flex items-center my-5'>
            <input className='focus:outline-none text-sm w-[90%] py-3 mx-3' placeholder='Card Number*'/>
            <p className='w-[10%] flex'><GrCreditCard className='text-2xl'/></p>
        </div>
        <div className='w-full border-[1px] border-[#d4d5d9] rounded-md my-5'>
            <input className='focus:outline-none text-sm w-[95%] py-3 mx-3' placeholder='Name On Card*'/>
        </div>
        <div className='w-full flex items-center my-5'>
            <div className='w-[60%] border-[1px] border-[#d4d5d9] rounded-md mr-5'>
                <input className='focus:outline-none text-sm py-3 ml-3' placeholder='Valid Thru (MM/YY)*'/>
            </div>
            <div className='w-[40%] border-[1px] border-[#d4d5d9] rounded-md'>
                <input className='focus:outline-none w-[100px] text-sm py-3 ml-3' placeholder='Enter CVV*'/>
            </div>
        </div>
        <div className='mt-4 text-sm'>
            <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
        </div>
    </div>
  )
}

export default CardPayment