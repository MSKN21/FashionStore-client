import React, { useState,useEffect } from 'react'
import Img1 from "../../../Images/Others/shirt1.avif"
import Img2 from "../../../Images/Others/shirt2.avif"
import Img3 from "../../../Images/Others/shirt3.avif"
import Img4 from "../../../Images/Others/shirt4.avif"
import Img5 from "../../../Images/Others/shirt5.avif"
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ProductCard = () => {

  const [imageIndex , setImageIndex] = useState(0)
  const [wishlistFlag , setWishlistFlag] = useState(true)

  const Images = [Img1 , Img2 , Img3 , Img4 , Img5 ]

  const updateImageIndex = (index)=>{
    setImageIndex(index)
  }

  let slideInterval

  useEffect(() => {
    slideInterval = setInterval(() => {
        const currentIndex = imageIndex < Images.length - 1 ? imageIndex + 1 : 0;
        updateImageIndex(currentIndex);
    }, 2000);

    // Clear interval when component unmounts or when needed
    return () => clearInterval(slideInterval);
  }, [imageIndex, Images]);

  const handleImageClick = (clickedIndex) => {
    clearInterval(slideInterval);
    updateImageIndex(clickedIndex);
  };

  return (
    <NavLink to={"detail"} className='productCard group mx-auto h-[43vh] max-h-[43vh] min-w-[230px] max-w-[230px] hover:shadow-xl duration-300 cursor-pointer'>
      <div className='relative' onMouseEnter={()=>handleImageClick(0)}>
        <div className='staticImage absolute h-[35vh] w-full group-hover:hidden'>
          <img src={Img1} className="absolute object-fit h-full w-full block"/>
          <div className='absolute flex items-end h-[35vh]'>
            <div className='px-2 py-1 flex items-center w-fit bg-[#ffffffc3] text-xs rounded-[2px] ml-4 mb-3'>4.1 <FaStar className='text-lg px-[2px] text-[#7E818C]'/> | 21.6K</div>
          </div>
        </div>

        <div className="absolute h-[35vh] w-full hidden group-hover:block">
          <div className="w-[100%] h-[100%] flex overflow-hidden">
              {
              Images.map((image,index)=> <img className="object-fit cursor-pointer w-full h-full block flex-shrink-0 flex-grow-0 transition-[translate] duration-500 ease-in-out" style={{translate: `${-100*imageIndex}%`}} src={image}/>)
              }
          </div>
        </div>
      
        <div className='absolute flex items-end h-[43vh] w-full'>
          <div className='px-4 bg-white w-full'>
            <div className='hidden group-hover:flex group-hover:flex-col duration-300'>
              <div className="w-full mx-auto flex justify-center">
                <div className="py-1 px-4 my-1 w-fit rounded-full flex flex-row justify-center cursor-pointer">
                {
                    Images.map((image,index)=> imageIndex === index ? <p className='scrollOptions p-[2px] mx-1 rounded-[50%] bg-[#56575D] scale-125' onClick={()=>handleImageClick(index)}></p>
                    : <p className='scrollOptions p-[2px] mx-1 rounded-[50%] bg-[#CFCFD1] hover:scale-125' onClick={()=>handleImageClick(index)}></p>)
                }
                </div>
              </div>
              <div>
                {
                  wishlistFlag ? <p className='border-[1px] rounded-[3px] border-[#c3c2c2] hover:border-[#696969] px-4 mb-2 text-xs font-bold text-center flex items-center justify-center tracking-wider'> <FaRegHeart className='text-4xl px-2'/>  WISHLIST</p>
                  : <p className='rounded-[3px] border-[#c3c2c2] px-4 mb-2 text-xs font-bold text-center flex items-center justify-center text-[#FFFFFF] bg-[#535766] tracking-wider'> <FaHeart className='text-4xl px-2 text-[#ff8787]'/>  WISHLISTED</p>
                }
              </div>
              <div className='text-base text-[#7E818C]'>Sizes: 30,32</div>
            </div>
            <div className='group-hover:hidden'>
              <p className='font-bold pt-1'>Roadster</p>
              <p className='text-sm'>Men Pure Cotton Casual Shirt</p>
            </div>
            <div className='flex items-center pt-1 pb-1'>
              <p className='text-sm font-bold'>Rs. 779 <span className='text-xs pl-1 text-[#7E818C] line-through'>Rs.1299</span></p>
              <p className='text-xs pl-1 text-[#FF905A]'>(40% OFF)</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductCard