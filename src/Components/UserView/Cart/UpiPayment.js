import React from 'react'
import Phonepe from "../../../Images/Icons/phonepe.png"
import Paytm from "../../../Images/Icons/paytm.png"
import Googlepay from "../../../Images/Icons/googlepay.png"
import Bhim from "../../../Images/Icons/bhim.png"

const UpiPayment = () => {

    const selectUPI = (index) => {
        let allLinks = [...document.querySelectorAll(".upiDiv")]
        allLinks.forEach((link) => {
            if(link.querySelector("input").getAttribute("checked") !== null)
                link.querySelector("input").removeAttribute("checked")
            if(link.querySelector(".hiddenUpiDiv").classList.contains("block"))
                link.querySelector(".hiddenUpiDiv").classList.replace("block","hidden")
            if(link.querySelector(".upiName").classList.contains("font-bold"))
                link.querySelector(".upiName").classList.remove("font-bold")
        })
        allLinks[index].querySelector("input").setAttribute("checked", "checked")
        allLinks[index].querySelector(".hiddenUpiDiv").classList.replace("hidden","block")
        allLinks[index].querySelector(".upiName").classList.add("font-bold")
    }

  return (
    <div className='p-5'>
        <h1 className='text-[#424553] text-base font-bold mb-5'>Pay Using UPI</h1>
        <div>
            <div className='border-b-[1px] py-4 upiDiv' onClick={()=>selectUPI(0)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Phonepe} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>PhonePe</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] py-4 upiDiv' onClick={()=>selectUPI(1)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Paytm} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm'>Paytm</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] py-4 upiDiv' onClick={()=>selectUPI(2)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Googlepay} className='w-full h-full p-1'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm'>Google Pay</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='w-full border-[1px] border-[#d4d5d9] rounded-md my-4'>
                        <input className='focus:outline-none text-sm w-[95%] py-3 ml-3' placeholder='Enter UPI ID here'/>
                    </div>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='py-4 upiDiv' onClick={()=>selectUPI(3)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Bhim} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm'>Enter UPI ID</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='w-full border-[1px] border-[#d4d5d9] rounded-md my-4'>
                        <input className='focus:outline-none text-sm w-[95%] py-3 ml-3' placeholder='Enter UPI ID here'/>
                    </div>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpiPayment