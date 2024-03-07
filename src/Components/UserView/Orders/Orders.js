import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Img1 from "../../../Images/Others/shirt1.avif"
import { HiStar } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { Dropzone, FileMosaic } from "@files-ui/react";
import OrderCard from './OrderCard';

const Orders = () => {

  const [viewFilters,setViewFilters] = useState(false);
  const [viewReview,setViewReview] = useState(false);
  const [files, setFiles] = React.useState([]);

  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };

  const toggleViewReview = () =>{
    setViewReview(!viewReview)
  }

  const toggleViewFilters = () =>{
    setViewFilters(!viewFilters)
  }

  return (
    <div className='p-6 text-[#282c3f]'>
      <div className='flex items-center w-11/12 px-3 mb-5'>
        <div className='w-[30%]'>
          <p className='text-lg font-bold'>All orders</p>
          <p className='text-sm'>from anytime</p>
        </div>
        <div className='w-[50%]'>
          <div className="flex justify-left items-center bg-[#ffffff] border-[1px] w-full mx-2 py-1 rounded">
            <IoIosSearch className=" text-4xl p-2"/>
            <input className="bg-[#ffffff] w-full mr-4 focus:border-none outline-none" placeholder='Search in Orders'/>
          </div>
        </div>
        <div className='w-[20%] flex items-center justify-end'>
          <div className='border-[1px] w-fit px-3 flex items-center justify-center rounded cursor-pointer'>
            <IoFilter/>
            <p className='text-sm font-bold text-center py-3 pl-2' onClick={()=>toggleViewFilters()}>FILTER</p>
          </div>
        </div>
      </div>
      <div>
        <div className='bg-[#f5f5f5] p-3 w-11/12'>
          <OrderCard toggleViewReview={toggleViewReview}/>
          <OrderCard toggleViewReview={toggleViewReview}/>
          <OrderCard toggleViewReview={toggleViewReview}/>
          <OrderCard toggleViewReview={toggleViewReview}/>
          <OrderCard toggleViewReview={toggleViewReview}/>
        </div>
      </div>
      {
        viewFilters && <div className='fixed z-[60] top-0 left-0 h-full w-full bg-[#00000052] flex items-center justify-center'>
          <div className='w-3/12 bg-white text-sm p-5 rounded-md'>
            <div className='flex items-center text-lg'>
              <p className='w-[80%] font-bold'>Filter Orders</p>
              <p className='w-[20%] flex justify-end'><IoClose className='text-xl cursor-pointer' onClick={()=>toggleViewFilters()}/></p>
            </div>
            <div className='py-2 mt-2 border-b-[1px] text-[#696e79]'>
              <h1 className='text-sm font-bold py-1 text-[#282c3f]'>Status</h1>
              <div className='flex items-center my-3'><input type="radio" name="status" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>All</p></div>
              <div className='flex items-center my-3'><input type="radio" name="status" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>On the way</p></div>
              <div className='flex items-center my-3'><input type="radio" name="status" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Delivered</p></div>
              <div className='flex items-center my-3'><input type="radio" name="status" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Returned</p></div>
              <div className='flex items-center my-3'><input type="radio" name="status" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Canceled</p></div>
            </div>
            <div className='py-2 mt-2 border-b-[1px] text-[#696e79]'>
              <h1 className='text-sm font-bold py-1 text-[#282c3f]'>Time</h1>
              <div className='flex items-center my-3'><input type="radio" name="time" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Anytime</p></div>
              <div className='flex items-center my-3'><input type="radio" name="time" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Last 30 days</p></div>
              <div className='flex items-center my-3'><input type="radio" name="time" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Last 6 months</p></div>
              <div className='flex items-center my-3'><input type="radio" name="time" className='h-4 w-4 mr-3 cursor-pointer accent-[#ff3f6c]'/> <p>Last year</p></div>
            </div>
            <div className='flex items-center mt-4 text-sm font-bold text-center gap-3'>
              <p className='border-[1px] border-[#d4d5d9] cursor-pointer w-1/2 py-2 rounded'>CLEAR FILTERS</p>
              <p className='border-[1px] border-[#ff3f6c] cursor-pointer text-white w-1/2 py-2 bg-[#ff3f6c] rounded' onClick={()=>toggleViewFilters()}>APPLY</p>
            </div>
          </div>
        </div>
      }
      {
        viewReview && <div className='fixed z-[60] top-0 left-0 h-full w-full bg-[#00000052] flex items-center justify-center'>
          <div className='w-4/12 bg-white text-sm p-5 rounded-md'>
            <div className='w-full relative my-2 h-6'>
              <h2 className='absolute w-full text-sm text-center font-bold text-[#ff3f6c]'>WRITE REVIEW</h2>
              <p className='absolute'><IoClose className='text-xl cursor-pointer' onClick={()=>toggleViewReview()}/></p>
            </div>
            <div className='flex my-[2px] mx-1 items-center rounded'>
              <div className='w-[12%]'>
                <img src={Img1} alt='ShirtImage'/>
              </div>
              <div className='text-sm pl-6 w-[88%] text-[#7e818c]'>
                <p className='font-bold'>Campus Sutra</p>
                <p className='pt-[2px]'>Men Blue Colourblocked Cotton Pure Cotton T-shirt</p>
                <p className='pt-[2px]'>Size: <span>XL</span></p>
                <div className='flex w-full my-1'>
                  <HiStar className='text-xl cursor-pointer text-[#ff3f6c]'/>
                  <HiStar className='text-xl cursor-pointer text-[#ff3f6c]'/>
                  <HiStar className='text-xl cursor-pointer text-[#ff3f6c]'/>
                  <HiStar className='text-xl cursor-pointer text-[#ff3f6c]'/>
                  <HiOutlineStar className='text-xl cursor-pointer text-[#ff3f6c]'/>
                  {/* <HiStar className='text-xl cursor-pointer text-[#ff3f6c]'/> */}
                </div>
              </div>
            </div>
            <div className='w-full mx-1'>
              <textarea className='w-full border-[1px] border-[#d4d5d9] my-3 rounded p-3 text-sm h-[18vh] focus:outline-none'></textarea>
            </div>
            <div>
              <Dropzone onChange={updateFiles} value={files} className='mx-1 mb-2'>
                {files.map((file) => (
                  <FileMosaic {...file} preview />
                ))}
              </Dropzone>
            </div>
            <p className="text-[#7e818c] text-xs mx-1">By submitting review you give us consent to publish and process personal information in accordance with <span className='font-bold text-[#ff3f6c]'>Terms of use</span> and <span className='font-bold text-[#ff3f6c]'>Privacy Policy</span></p>
            <div className='flex justify-center'>
              <p className='border-[1px] border-[#ff3f6c] cursor-pointer text-white w-fit px-5 py-2 my-3 font-bold bg-[#ff3f6c] rounded' onClick={()=>toggleViewReview()}>SUBMIT</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Orders