import React from 'react'
import Freecharge from "../../../Images/Icons/freecharge.png"
import Mobikwik from "../../../Images/Icons/mobikwik.png"
import Paytmwallet from "../../../Images/Icons/paytmwallet.avif"
import Airtel from "../../../Images/Icons/airtel.png"


const Walletpayment = () => {

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
                        <img src={Paytmwallet} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>Paytm Payments Bank Wallet</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='w-full border-[1px] border-[#d4d5d9] rounded-md my-4'>
                        <input className='focus:outline-none text-sm w-[95%] py-3 ml-3' placeholder='Enter your mobile number here'/>
                    </div>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>LINK NOW</p>
                    </div>
                </div>
            </div>
            <div className='border-b-[1px] py-4 upiDiv' onClick={()=>selectUPI(1)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Airtel} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>Airtel Payments Bank</p>
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
                        <img src={Freecharge} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>Freecharge</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
            <div className='py-4 upiDiv' onClick={()=>selectUPI(3)}>
                <div className='flex items-center gap-5 cursor-pointer'>
                    <input type="radio" name="upi" className="cursor-pointer h-4 w-4"/>
                    <div className='rounded-[50%] h-9 w-9'>
                        <img src={Mobikwik} className='w-full h-full'/>
                    </div>
                    <p className='text-[#424553] upiName text-sm upiName'>Mobikwik</p>
                </div>
                <div className='hidden hiddenUpiDiv'>
                    <div className='mt-4 text-sm'>
                        <p className='bg-[#d03357] cursor-pointer tracking-wider rounded text-white text-center font-bold py-3 hover:bg-[#ac3c56d7]'>PAY NOW</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Walletpayment