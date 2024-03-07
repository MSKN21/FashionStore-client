import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import Img1 from "../../../Images/Others/shirt1.avif"
import Img2 from "../../../Images/Others/shirt2.avif"
import Img3 from "../../../Images/Others/shirt3.avif"
import Img4 from "../../../Images/Others/shirt4.avif"
import Img5 from "../../../Images/Others/shirt5.avif"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Ratings = () => {

  const Images = [Img1 , Img2 , Img3 , Img4 , Img5 ]
  const customerImages = [Img1 , Img2 , Img3 ]

  return (
    <div className=''>
      <div className='w-11/12 pt-6'>
        <h1 className='font-[700] text-base flex items-center'><p>RATINGS</p> <CiStar className='text-2xl ml-2'/> </h1>
        <div className='flex py-3'>
          <div className='border-r-2 w-[30%] sm:w-1/2 flex items-center'>
            <div>
              <div className='flex items-end text-3xl sm:text-5xl'>
                <p>4.1</p> <IoStar className='text-3xl pb-1 text-[#a9abb3]'/>
              </div>
              <p className='text-sm mt-3'>7.2k Verified Buyers</p>
            </div>
          </div>
          <div className='w-[70%] sm:w-1/2 ml-2 sm:ml-10 py-3'>
            <div className='flex items-center text-xs'>
              <p className='flex items-center text-sm text-[#a9abb3]'><span className='mr-1'>5</span><IoStar className='text-xs'/></p>
              <div className='relative w-[150px] h-1 mx-2 bg-[#f5f5f6]'>
                <p className='absolute w-[85px] h-1 bg-[#14958f]'></p>
              </div>
              <p>4044</p>
            </div>
            <div className='flex items-center text-xs'>
              <p className='flex items-center text-sm text-[#a9abb3]'><span className='mr-1'>4</span><IoStar className='text-xs'/></p>
              <div className='relative w-[150px] h-1 mx-2 bg-[#f5f5f6]'>
                <p className='absolute w-[60px] h-1 bg-[#14958f]'></p>
              </div>
              <p>1606</p>
            </div>
            <div className='flex items-center text-xs'>
              <p className='flex items-center text-sm text-[#a9abb3]'><span className='mr-1'>3</span><IoStar className='text-xs'/></p>
              <div className='relative w-[150px] h-1 mx-2 bg-[#f5f5f6]'>
                <p className='absolute w-[20px] h-1 bg-[#72bfbc]'></p>
              </div>
              <p>300</p>
            </div>
            <div className='flex items-center text-xs'>
              <p className='flex items-center text-sm text-[#a9abb3]'><span className='mr-1'>2</span><IoStar className='text-xs'/></p>
              <div className='relative w-[150px] h-1 mx-2 bg-[#f5f5f6]'>
                <p className='absolute w-[40px] h-1 bg-[#fcb301]'></p>
              </div>
              <p>677</p>
            </div>
            <div className='flex items-center text-xs'>
              <p className='flex items-center text-sm text-[#a9abb3]'><span className='mr-1'>1</span><IoStar className='text-xs'/></p>
              <div className='relative w-[150px] h-1 mx-2 bg-[#f5f5f6]'>
                <p className='absolute w-[70px] h-1 bg-[#f16565]'></p>
              </div>
              <p>1000</p>
            </div>
          </div>
        </div>
        <div>
          <div className='font-bold'>Customer Photos (150)</div>
          <div className='flex gap-3 py-5'>
            {
              Images.map((image, i) => <div className='w-[100px] h-[100px]'>
                <img src={image} alt={"Image"} className='object-cover w-full h-full'/>
              </div>)
            }
          </div>
        </div>
        <div className=''>
          <div className='font-bold'>Customer Reviews (752)</div>
          <div className='my-5 h-[550px] overflow-y-scroll custom-scrollbar-dropdown'>
            {
              Images.map((img, i) => <div className='border-[#d4d5d9c6] border-b-[1px] pt-2'>
                <div className='flex items-start'>
                  <p className='flex items-center text-sm text-[#ffffff] bg-slate-400 px-1 mx-2 my-[5px]'><span className='mr-1'>5</span><IoStar className='text-xs'/></p>
                  <div>
                    <p>I've been living in this jacket for the past couple of months and it's been awesome. They have a real heavy quality feel, internal pockets, and main zip opening from the bottom meaning I can sit down comfortably. It's control internal warm, but it stops the wind, which is essential when standing pitch-side . I'm happy using this bomber jacket. Overall really pleased with the purchase.</p>
                    <div className='flex gap-2 py-2'>
                    {
                      customerImages.map((image, i) => <div className='w-[75px] h-[75px]'>
                        <img src={image} alt={"Image"} className='object-cover w-full h-full'/>
                      </div>)
                    }
                    </div>
                    <div className='flex items-center text-[#565a63] text-base py-3'>
                      <p className='w-4/6'>Ronnie Thomas Joseph | 11 Jan 2023</p>
                      <div className='w-2/6 flex justify-end gap-5 mx-2'>
                        <p className='flex items-center'> <AiOutlineLike/> 13</p>
                        <p className='flex items-center'> <AiOutlineDislike/> 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ratings
