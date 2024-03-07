import React from 'react'
import { IoCaretDown } from "react-icons/io5";
import Sbi from "../../../Images/Icons/sbi.png"
import Axis from "../../../Images/Icons/axis.png"
import Icic from "../../../Images/Icons/icic.png"
import Kotak from "../../../Images/Icons/kotak.png"
import Hdfc from "../../../Images/Icons/hdfc.png"

const NetPayment = () => {
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
                        <img src={Axis} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>Axis Bank</p>
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
                        <img src={Hdfc} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>HDFC Bank</p>
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
                        <img src={Icic} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>ICIC Bank</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] py-4 upiDiv' onClick={()=>selectUPI(3)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Kotak} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>Kotak</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] py-4 upiDiv' onClick={()=>selectUPI(4)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Sbi} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>SBI</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='w-full border-[1px] border-[#d4d5d9] rounded-md my-4 flex items-center cursor-pointer'>
                <p className='text-sm w-[90%] py-3 ml-3'>Other Banks</p>
                <p className='w-[10%] flex justify-center'><IoCaretDown/></p>
            </div>
        </div>
    </div>
  )
}

export default NetPayment