import React, { useState, useEffect } from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import Account from './Account'
import Addresses from './Addresses'
import Coupons from './Coupons'
import Overview from './Overview'
import Orders from '../Orders/Orders'
import OrderDetails from '../Orders/OrderDetails'

const Profile = () => {

  const [displayOverview , setDisplayOverview] = useState(false)
  const [displayOrders , setDisplayOrders] = useState(false)
  const [displayCoupons , setDisplayCoupons] = useState(false)
  const [displayProfile , setDisplayProfile] = useState(false)
  const [displayCards , setDisplayCards] = useState(false)
  const [displayUPI , setDisplayUPI] = useState(false)
  const [displayAddresses , setDisplayAddresses] = useState(false)
  const [displayTerms , setDisplayTerms] = useState(false)
  const [displayPolicy , setDisplayPolicy] = useState(false)

  const selectLink = (element,index) => {
    let allLinks = [...document.querySelectorAll(".accLinks")]
    allLinks.forEach((link) => {
      link.classList.remove("font-bold")
      link.classList.remove("text-[#14cda8]")
    })
    allLinks[index].classList.add("font-bold")
    allLinks[index].classList.add("text-[#14cda8]")

    setDisplayOverview(false)
    setDisplayOrders(false)
    setDisplayCoupons(false)
    setDisplayProfile(false)
    setDisplayCards(false)
    setDisplayUPI(false)
    setDisplayAddresses(false)
    setDisplayTerms(false)
    setDisplayPolicy(false)

    switch(index){
      case 0:
        setDisplayOverview(true)
        break;
      case 1:
        setDisplayOrders(true)
        break;
      case 2:
        setDisplayCoupons(true)
        break;
      case 3:
        setDisplayProfile(true)
        break;
      case 4:
        setDisplayCards(true)
        break;
      case 5:
        setDisplayUPI(true)
        break;
      case 6:
        setDisplayAddresses(true)
        break;
      case 7:
        setDisplayTerms(true)
        break;
      case 8:
        setDisplayPolicy(true)
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
    <div id='profile' className='pt-20'>
      <div className='w-6/12 mx-auto py-10 text-[#282c3f]'>
        <div className='py-4'>
          <h1 className='font-bold text-lg'>Account</h1>
          <p className='text-sm'>Sai Krupananda</p>
        </div>
        <div className='w-full flex border-t-[1px] border-[#d4d5d9]'>
          <div id="profileSidebar" className='w-[20%] border-r-[1px] border-[#d4d5d9] pr-5'>
            <div className='py-5 border-b-[1px] border-[#d4d5d9]'>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,0)}>Overview</p>
            </div>
            <div className='py-5 border-b-[1px] border-[#d4d5d9]'>
              <h2 className='text-xs font-semibold py-3 text-[#7e818c]'>ORDERS</h2>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,1)}>Orders&nbsp;&&nbsp;Returns</p>
            </div>
            <div className='py-5 border-b-[1px] border-[#d4d5d9]'>
              <h2 className='text-xs font-semibold py-3 text-[#7e818c]'>CREDITS</h2>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,2)}>Coupons</p>
            </div>
            <div className='py-5 border-b-[1px] border-[#d4d5d9]'>
              <h2 className='text-xs font-semibold py-3 text-[#7e818c]'>ACCOUNT</h2>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,3)}>Profile</p>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,4)}>Saved Cards</p>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,5)}>Saved UPI</p>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,6)}>Addresses</p>
            </div>
            <div className='py-5 border-[#d4d5d9]'>
              <h2 className='text-xs font-semibold py-3 text-[#7e818c]'>LEGAL</h2>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,7)}>Terms&nbsp;of&nbsp;Use</p>
              <p className='text-[15px] cursor-pointer my-1 hover:text-[#14cda8] accLinks' onClick={(e)=>selectLink(e,8)}>Privacy&nbsp;Policy</p>
            </div>
          </div>
          <div className='w-[80%]'>
            {displayOverview && <Overview/>}
            {displayOrders && <Orders/>}
            {/* {displayOrders && <OrderDetails/>} */}
            {displayCoupons && <Coupons/>}
            {displayProfile && <Account/>}
            {displayCards && <div className='text-center font-bold my-10 text-lg'>Saved Cards</div>}
            {displayUPI && <div className='text-center font-bold my-10 text-lg'>Saved UPI</div>}
            {displayAddresses && <Addresses/>}
            {displayTerms && <div className='text-center font-bold my-10 text-lg'>Terms Of Use</div>}
            {displayPolicy && <div className='text-center font-bold my-10 text-lg'>Privacy Policy</div>}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile