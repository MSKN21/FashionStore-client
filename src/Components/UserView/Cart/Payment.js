import React, { useEffect, useState } from 'react'
import { SlStar } from "react-icons/sl";
import { FaMoneyBillWave } from "react-icons/fa";
import { GrCreditCard } from "react-icons/gr";
import { TfiWallet } from "react-icons/tfi";
import { RiBankLine } from "react-icons/ri";
import { PiContactlessPayment } from "react-icons/pi";
import UpiPayment from './UpiPayment';
import CodPayment from './CodPayment';
import Walletpayment from './Walletpayment';
import NetPayment from './NetPayment';
import CardPayment from './CardPayment';

const Payment = () => {

  const [displayRecomm , setDisplayRecomm] = useState(false)
  const [displayUpi , setDisplayUpi] = useState(false)
  const [displayCod , setDisplayCod] = useState(false)
  const [displayWallet , setDisplayWallet] = useState(false)
  const [displayNet , setDisplayNet] = useState(false)
  const [displayCard , setDisplayCard] = useState(false)

  const selectPayment = (element,index) => {
    let allLinks = [...document.querySelectorAll(".payLinks")]
    allLinks.forEach((link) => {
      link.classList.remove("bg-white")
      link.classList.remove("text-[#ff3f6c]")
      link.classList.remove("border-l-4")
      link.classList.replace("border-b-0","border-b-[1px]",)
      link.classList.remove("border-[#ff3f6c]")
    })
    allLinks[index].classList.add("bg-white")
    allLinks[index].classList.add("text-[#ff3f6c]")
    allLinks[index].classList.add("border-l-4")
    allLinks[index].classList.replace("border-b-[1px]","border-b-0")
    allLinks[index].classList.add("border-[#ff3f6c]")

    setDisplayRecomm(false)
    setDisplayCod(false)
    setDisplayUpi(false)
    setDisplayCard(false)
    setDisplayWallet(false)
    setDisplayNet(false)

    switch(index){
      case 0:
        setDisplayCod(true)
        break;
      case 1:
        setDisplayUpi(true)
        break;
      case 2:
        setDisplayCard(true)
        break;
      case 3:
        setDisplayWallet(true)
        break;
      case 4:
        setDisplayNet(true)
        break;
      default:
        break;
    }
  }

  useEffect(()=>{
    selectPayment(null,1)
  },[])

  return (
    <div className='w-full flex justify-center border-t-[1px] text-[#282c3f]'>
      <div className='w-4/6 px-3 border-r-[1px]'>
        <div className='my-5'>
          <h1 className='text-[#424553] text-base font-bold my-5'>Choose Payment Mode</h1>
          <div className='border-[1px] flex rounded-sm'>
            <div className='w-2/6 text-lg bg-[#f3f3f3]'>
              <div onClick={(e)=>selectPayment(e,0)} className='text-[#424553] payLinks cursor-pointer flex items-center gap-4 px-5 py-5 border-b-[1px]'>
                <p><FaMoneyBillWave/></p>
                <p className='font-bold text-sm'>Cash On Delivery</p>
              </div>
              <div onClick={(e)=>selectPayment(e,1)} className='text-[#424553] payLinks cursor-pointer flex items-center gap-4 px-5 py-5 border-b-[1px]'>
                <p><PiContactlessPayment/></p>
                <p className='font-bold text-sm'>UPI Payment</p>
              </div>
              <div onClick={(e)=>selectPayment(e,2)} className='text-[#424553] payLinks cursor-pointer flex items-center gap-4 px-5 py-5 border-b-[1px]'>
                <p><GrCreditCard/></p>
                <p className='font-bold text-sm'>Credit/Debit Card</p>
              </div>
              <div onClick={(e)=>selectPayment(e,3)} className='text-[#424553] payLinks cursor-pointer flex items-center gap-4 px-5 py-5 border-b-[1px]'>
                <p><TfiWallet/></p>
                <p className='font-bold text-sm'>Wallets</p>
              </div>
              <div onClick={(e)=>selectPayment(e,4)} className='text-[#424553] payLinks cursor-pointer flex items-center gap-4 px-5 py-5 border-b-[1px]'>
                <p><RiBankLine/></p>
                <p className='font-bold text-sm'>Net Banking</p>
              </div>
            </div>
            <div className='w-4/6'>
              {displayCod && <CodPayment/>}
              {displayUpi && <UpiPayment/>}
              {displayCard && <CardPayment/>}
              {displayWallet && <Walletpayment/>}
              {displayNet && <NetPayment/>}
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/6 px-3'>
        <div className='text-sm my-5'>
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
      </div>
    </div>
  )
}

export default Payment