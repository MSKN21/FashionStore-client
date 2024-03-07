import React from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import WishlistItemCard from './WishlistItemCard';

const Wishlist = () => {

  const itemArr = [12,2,3,4,5,6,77,8,8,9,9,0,7,6,5,5,3,4,5,6,7,7,8,9]

  return (
    <>
      <div className='pt-20 w-10/12 mx-auto'>
        <div className='text-[#282c3f] py-10'>
          <div className='flex text-lg mx-3'>
            <h1 className='font-bold mr-3'>My Wishlist</h1>
            <p>27 Items</p>
          </div>
          <div className='py-10 gap-12 w-full flex flex-wrap overflow-x-auto justify-center'>
            {
                itemArr.map((card)=><WishlistItemCard/>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist