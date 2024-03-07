import React, { useState, useEffect } from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import ProductList from './ProductList'
import Address from './Address'
import Payment from './Payment'

const Cart = () => {

  const [displayProductList , setDisplayProductList] = useState(false)
  const [displayAddress , setDisplayAddress] = useState(false)
  const [displayPayment , setDisplayPayment] = useState(false)

  const selectLink = (element,index) => {
    let allLinks = [...document.querySelectorAll(".cartBtns")]
    allLinks.forEach((link) => {
      link.classList.remove("font-bold")
      link.classList.add("font-semibold")
      link.classList.remove("text-[#20BD99]")
      link.classList.add("text-[#696B79]")
      link.classList.remove("border-b-2")
      link.classList.remove("border-[#20BD99]")
    })
    allLinks[index].classList.replace("font-semibold","font-bold")
    allLinks[index].classList.replace("text-[#696B79]","text-[#20BD99]")
    allLinks[index].classList.add("border-b-2")
    allLinks[index].classList.add("border-[#20BD99]")

    setDisplayProductList(false)
    setDisplayAddress(false)
    setDisplayPayment(false)

    switch(index){
      case 0:
        setDisplayProductList(true)
        break;
      case 1:
        setDisplayAddress(true)
        break;
      case 2:
        setDisplayPayment(true)
        break;
      default:
        break;
    }

  }

  useEffect(()=>{
    selectLink(null,0)
  },[])


  return (
    <>
      <div className='pt-20 w-3/6 mx-auto'>
        <div className='my-10'>
          <div>
            <div className=''>
              <div className='flex items-center justify-center text-xs gap-2 my-5'>
                <p onClick={(e)=>selectLink(e,0)} className='tracking-[3px] px-[2px] py-1 cursor-pointer text-center font-semibold text-[#696B79] cartBtns'>BAG</p>
                <p>-------------</p>
                <p onClick={(e)=>selectLink(e,1)} className='tracking-[3px] px-[2px] py-1 cursor-pointer text-center font-semibold text-[#696B79] cartBtns'>ADDRESS</p>
                <p>-------------</p>
                <p onClick={(e)=>selectLink(e,2)} className='tracking-[3px] px-[2px] py-1 cursor-pointer text-center font-semibold text-[#696B79] cartBtns'>PAYMENT</p>
              </div>
              <div>
                {displayProductList && <ProductList/>}
                {displayAddress && <Address/>}
                {displayPayment && <Payment/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart