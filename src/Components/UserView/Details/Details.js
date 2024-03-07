import React, { useEffect, useState } from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import Img1 from "../../../Images/Others/shirt1.avif"
import Img2 from "../../../Images/Others/shirt2.avif"
import Img3 from "../../../Images/Others/shirt3.avif"
import Img4 from "../../../Images/Others/shirt4.avif"
import Img5 from "../../../Images/Others/shirt5.avif"
import Ratings from './Ratings'
import ProductSpecs from './ProductSpecs'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaTruck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import SimilarProducts from './SimilarProducts'


const Details = () => {

  const Images = [Img1 , Img2 , Img3 , Img4 , Img5 ]
  const similarProducts = [1,2,3,4,5,6,7,8,9,0,1,2]
  const Sizes = ["S" , "M" , "L" , "XL" , "XXL" ]
  const [wishlistFlag , setWishlistFlag] = useState(true)
  const [imageIndex , setImageIndex] = useState(0)
  const [pincodeFlag , setPincodeFlag] = useState(true)
  const [imageViewer , setImageViewer] = useState(false)
  const [imageViewerNumber , setImageViewerNumber] = useState(0)

  const updateImageIndex = (index)=>{
    setImageIndex(index)
  }

  const switchimageViewer = (value) => {
    if(value!=null)
      setImageViewerNumber(value)
    setImageViewer(!imageViewer)
  }

  const switchPincodeFlag = ()=>{
    setPincodeFlag(!pincodeFlag)
  }

  useEffect(()=>{

    const scrollContainer = document.querySelector("#scrollContainer");
    let lastY = 0;

    if(scrollContainer){
      scrollContainer.addEventListener('mousemove', (e) => {
        if (lastY !== 0) {
          const deltaY = e.clientY - lastY;
          scrollContainer.scrollTop += deltaY;
        }
        lastY = e.clientY;
      });
  
      scrollContainer.addEventListener('mouseleave', () => {
        lastY = 0;
      });
    }


  },[imageViewer])

  

  return (
    <>
      <div className='w-full sm:w-10/12 mx-auto text-[#282c3f]'>
        <div className='w-full flex flex-col xl:flex-row pt-24'>
          <div className='hidden sm:block sm:w-full xl:w-[60%]'>
            <div className='w-full grid grid-cols-2 gap-2 p-2'>
              {
                Images.map((image,i)=>
                  <div className='overflow-hidden' onClick={()=>switchimageViewer(i)}>
                    <img src={image} alt={"Image"} className='hover:cursor-zoom-in hover:scale-105 transition-transform duration-300 ease-in-out'/>
                  </div>
                )
              }
            </div>
          </div>
          <div className='w-full sm:hidden'>
            <div className='w-full relative'>
              <div className="flex overflow-hidden">
                {
                Images.map((image,index)=> <img className="cursor-pointer block flex-shrink-0 flex-grow-0 transition-[translate] duration-300 ease-in-out" style={{translate: `${-100*imageIndex}%`}} src={image}/>)
                }
              </div>
            </div>
            <div className="w-fit mx-auto">
              <div className="py-2 px-4 my-1 w-fit rounded-full flex flex-row justify-center cursor-pointer">
                {
                    Images.map((image,index)=> imageIndex === index ? <p className='scrollOptions p-[3px] mx-1 rounded-[50%] bg-[#56575D] scale-125' onClick={()=>updateImageIndex(index)}></p>
                    : <p className='scrollOptions p-[3px] mx-1 rounded-[50%] bg-[#c3c3c3] hover:scale-125' onClick={()=>updateImageIndex(index)}></p>)
                }
              </div>
            </div>
          </div>

          <div className='w-full xl:w-[40%]'>
            <div className='p-2  pl-6'>
              <div id="productHeader" className='border-b-[1px] border-[#d4d5d9]'>
                <p className='text-2xl text-[#282c3f] font-bold'>Roadster</p>
                <p className='text-xl text-[#535665] font-[400] pb-4'>Men Blue & Black Typography Printed T-shirt</p>
                <div className='px-2 py-1 mb-3 text-base border-[1px] rounded-sm w-fit flex items-center justify-center cursor-pointer hover:border-[#515151]'>
                  <p className='font-bold'>4.2</p> <FaStar className='text-[#535766] text-sm ml-1'/> <p className='ml-2 w-[1px] h-4 border-r-2 border-[#a8abb9]'></p> <p className='text-[#535766] ml-2 font-[400]'>7.2k Ratings</p>
                </div>
              </div>
              <div className='border-b-[1px] border-[#d4d5d9]'>
                <div id="priceSection" className='flex mt-4 mb-1 items-center'>
                  <p className='text-[#282c3f] text-2xl font-[700] mr-3'>₹1399</p>
                  <p className='text-xl text-[#535665] mr-3'>MRP <s>3999</s></p>
                  <p className='text-xl font-[700] text-[#ff905a]'>(65% OFF)</p>
                </div>
                <p className='text-[#03a685] text-base font-[700] mt-1 pb-3'>inclusive of all taxes</p>
                <div id="colorSection">
                  <h1 className='font-[700] text-base'>MORE COLORS</h1>
                  <div className='flex gap-3 py-4 w-full sm:w-[60%]'>
                    {
                      Images.map((image, i) => <div className='cursor-pointer hover:shadow-xl '>
                        <img src={image} alt={"image"}/>
                      </div>)
                    }
                  </div>
                </div>
                <div id="sizeSection" className='mt-3'>
                <h1 className='font-[700] text-base'>SELECT SIZE</h1>
                  <div className='flex gap-3 py-3 w-full sm:w-[60%]'>
                    {
                      Sizes.map((size, i) => <div className='h-[50px] w-[50px] rounded-[50%] border-[1px] border-[#bfc0c6] hover:border-[#ff3f6c] hover:text-[#ff3f6c] cursor-pointer flex justify-center items-center'>
                        <p className='text-xs font-bold'>{size}</p>
                      </div>)
                    }
                  </div>
                </div>
                <div id="buySection" className='flex my-6 bo'>
                  <p className='px-2 sm:px-8 py-2 w-7/12 sm:w-3/6 font-bold text-sm sm:text-base bg-[#ff3e6c] hover:bg-[#9e4c5f] rounded-sm cursor-pointer flex items-center justify-center text-[#FFFFFF] mr-3'> <HiOutlineShoppingBag className='text-4xl font-bold px-2'/> ADD&nbsp;TO&nbsp;BAG</p>
                  {
                  wishlistFlag ? <p className='border-[1px] cursor-pointer w-5/12 sm:w-2/6 rounded-[3px] border-[#c3c2c2] hover:border-[#696969] px-4 py-2 text-xs font-bold text-center flex items-center justify-center tracking-wider'> <FaRegHeart className='text-4xl px-2'/>  WISHLIST</p>
                  : <p className='rounded-[3px] w-5/12 sm:w-2/6 cursor-pointer border-[#c3c2c2] px-4 py-2 text-xs font-bold text-center flex items-center justify-center text-[#FFFFFF] bg-[#535766] tracking-wider'> <FaHeart className='text-4xl px-2 text-[#ff8787]'/>  WISHLISTED</p>
                  }
                </div>
              </div>
              <div>
                <div id="deliverySelection" className='py-6'>
                  <h1 className='font-[700] text-base flex items-center'><p>DELIVERY OPTIONS</p> <FaTruck className='text-xl ml-3'/> </h1>
                  {
                    pincodeFlag ? 
                    <div className='flex items-center my-5 px-3 py-2 w-[280px] border-[1px] rounded-sm bg-[#f4f4f5]'>
                      <p className='flex w-1/4'>517501</p>
                      <RiVerifiedBadgeFill className='flex text-[#23c5a0] text-2xl'/>
                      <p className='flex w-3/4 justify-end text-base text-[#ff3e6c] font-bold cursor-pointer' onClick={switchPincodeFlag}>Change</p>
                    </div> :
                    <>
                      <div className='flex items-center mt-5 px-3 py-2 w-[280px] border-[1px] rounded-sm]'>
                        <p className='flex w-2/4'>
                          <input className='outline-none border-none text-base' placeholder='Enter Pincode'/>
                        </p>
                        <p className='flex w-2/4 justify-end text-base text-[#ff3e6c] font-bold cursor-pointer' onClick={switchPincodeFlag}>Check</p>
                      </div>
                      <p className='text-sm mt-2'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    </>
                  }
                  {
                    pincodeFlag && <>
                      <div className='flex items-center my-5'> <FaTruckFast className='text-3xl text-[#696e79] mr-5'/> <p className='text-base font-bold'>Get it by Sat, Jan 06</p></div>
                      <div className='flex items-center my-5'> <GiTakeMyMoney className='text-3xl text-[#696e79] mr-5'/> <p className='text-base font-bold'>Pay on delivery available</p></div>
                      <div className='flex items-center'> <HiMiniArrowsRightLeft className='text-3xl text-[#696e79] mr-5'/> <p className='text-base font-bold'>Easy 7 days return & exchange available</p></div>
                    </>
                  }
                </div>
                
                <div>
                  <p className='my-1 text-base'>100% Original Products</p>
                  {
                    !pincodeFlag &&
                    <>
                      <p className='my-1 text-base'>Pay on delivery might be available</p>
                      <p className='my-1 text-base'>Easy 7 days returns and exchanges</p>
                      <p className='my-1 text-base'>Try & Buy might be available</p>
                    </>
                  }
                </div>
              </div>
              <div className='py-6 border-b-[1px] border-[#d4d5d9]'>
                <h1 className='font-[700] text-base flex items-center'><p>BEST OFFERS</p> <MdOutlineLocalOffer className='text-xl ml-3'/> </h1>
                <div className='text-base mt-4'>
                  <p><b>Best Price:&nbsp;</b><span className='text-[#ff905a] font-bold'>Rs. 1189</span></p>
                  <p className='flex items-center py-1'><BsDot className='text-2xl'/> <p>Coupon Discount: 15% off (Your total saving: Rs. 2810)</p></p>
                  <p className='flex items-center py-1'><BsDot className='text-2xl'/> <p>Applicable on: All orders</p></p>
                  <p className='flex items-center py-1'><BsDot className='text-2xl'/> <p>Coupon code:&nbsp;<b>RESOLUTION15</b></p></p>
                  <p className='text-sm font-bold text-[#ff3f6c] mt-1'>View Eligible Products</p>
                </div>

                <div className='text-base mt-5'>
                  <p><b>EMI option available</b></p>
                  <p className='flex items-center py-1'><BsDot className='text-2xl'/> <p>Not Available</p></p>
                  <p className='text-sm font-bold text-[#ff3f6c] mt-1'>View Plan</p>
                </div>
              </div>
              <ProductSpecs/>
              <Ratings/>
              <div className='py-1 my-2'>Product Code: <b>4453297</b></div>
              <div className='py-1 my-2'>
                <p>Seller: <b className='text-[#ff3f6c] cursor-pointer'>Omnitech Retail</b></p>
                <p className='text-sm font-bold text-[#ff3f6c] mt-1 py-1 my-2 cursor-pointer'>View Supplier Information</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h1 className='font-bold text-base ml-4'>SIMILAR PRODUCTS</h1>
          <div className='my-2 mx-auto w-fit flex flex-wrap overflow-x-auto justify-center'>
              {
                similarProducts.map((product) =><SimilarProducts/>)
              }
          </div>
        </div>
      </div>
      {
        imageViewer && <div className='hidden sm:block'><div className="fixed top-0 h-screen w-full z-[60] bg-[#00000082]">
              <div className='sm:w-5/6 xl:w-2/4 mx-auto h-full overflow-y-scroll custom-scrollbar' id='scrollContainer'>
                <div className='absolute z-[70]'>
                    {
                      Images.map((image, index) => <div onClick={()=>setImageViewerNumber(index)} className={`w-[40px] mx-3 my-5 border-[1px] ${index!==imageViewerNumber ? "border-[#e4e4e4]" : "border-[#1e1e1e]"} cursor-pointer hover:border-[#1e1e1e]`}>
                        <img src={image} alt={"image"} />
                      </div>)
                    }
                </div>
                <div className='absolute sm:w-5/6 xl:w-2/4 mx-auto z-[65]'>
                  <div className='w-full flex justify-end'>
                    <IoClose onClick={()=>switchimageViewer(null)} className='text-4xl cursor-pointer text-[#56575D] hover:text-black bg-[#ffffffc1] my-4 mx-3'/>
                  </div>
                </div>
                <div>
                  <img src={Images[imageViewerNumber]} alt={"image"}/>
                </div>
              </div>
          </div>
        </div>
      }
    </>
  )
}

export default Details