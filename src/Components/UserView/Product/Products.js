import React, { useEffect, useState } from 'react'
import Navbar from '../../Common/Navbar/Navbar'
import Footer from '../../Common/Footer/Footer'
import FilterSection from './FilterSection';
import ProductCard from './ProductCard';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import Dropdown from 'react-dropdown';
import { BiSortAlt2 } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import 'react-dropdown/style.css';

const Products = () => {

  const pageArr = [1,2,4,5,2,3,4,5,5,23,4,5,6];
  const productArr = [1,2,4,5,2,3,4,5,5];
  const filterSectionArr = [1,2,4,5,1,2];
  const [filterToggle,setFilterToggle] = useState(false)
  const [sortToggle,setSortToggle] = useState(false)
  const [defaultFilterIndex,setDefaultFilterIndex] = useState(null)
  const [defaultFilterArr,setDefaultFilterArr] = useState([])
  const [defaultSortsArr,setDefaultSortsArr] = useState(["Size" , "Weight" , "Bundles" , "Country Of Origin", "Size" , "Weight" ,
  "Bundles" , "Country Of Origin" , "Weight" , "Bundles" , "Country Of Origin"])

  const options = [
    "Recommended", "What's New", "Popularity", "Better Discount" , "Price:Low to High" , "Price:High to Low" , "Customer Rating"
  ];
  
  const defaultOption = options[0];

  const defaultSortOptionsArr = ["XSS","XS","S","M","L","XL","XXL","XXXL","XSS","XS","S","M","L","XL","XXL","XXXL","XSS","XS","S","M","L","XL","XXL","XXXL","XSS","XS","S","M","L","XL","XXL","XXXL"]
  
  const switchFilterToggle = ()=>{
    setFilterToggle(!filterToggle);
  }

  const switchSortToggle = ()=>{
    setSortToggle(!sortToggle);
  }

  const scrollLeft = () => {
    const scrollableElement = document.querySelector(".pageScroller")
    scrollableElement.scrollBy({ left: -100, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    const scrollableElement = document.querySelector(".pageScroller")
    scrollableElement.scrollBy({ left: 100, behavior: 'smooth' });
  };

  const selectPage = (index) => {
    const allPages = [...document.querySelectorAll(".pages")]
    const selectedPage = document.getElementById(`page${index}`)
    allPages.forEach((page)=>{
      if(page.className.includes("bg-black text-white"))
      page.className = page.className.replace("bg-black text-white","")
    })
    selectedPage.className += " bg-black text-white"
  }

  const selectedDefaultFilter = (index) =>{
    if(index===defaultFilterIndex)
      setDefaultFilterIndex(null)
    else
    {
      setDefaultFilterIndex(index)
      let newIndexArr = [...defaultSortsArr]
      setDefaultSortsArr(newIndexArr)
    }
  }

  return (
    <>
      <div className="pt-24 w-full mx-auto lg:w-10/12">
        <div className="px-7 text-sm font-sans">
          <div className='py-2 font-semibold text-[#6E6F74]'>Home / Clothing / Men Clothing / <span className='font-bold text-[#1b1b1b]'>T-Shirts For Men & Women</span></div>
          <div className='py-2 font-semibold text-base text-[#6E6F74]'> <span className='font-bold text-[#1b1b1b]'>T-Shirts For Men & Women</span> - 46 items</div>
        </div>
        <div className="h-full py-2 flex w-full">
          <div className="w-2/12 h-screen border-r-[1px] overflow-y-scroll custom-scrollbar hidden xl:block">
            <div className='px-7 flex items-center'>
              <h2 className="font-bold text-base py-2">FILTERS</h2>
              <p className='flex justify-end w-full text-xs text-[#FF3F6C] font-bold cursor-pointer'><span>CLEAR ALL</span></p>
            </div>
            {
              filterSectionArr.map((product,i) => <FilterSection/>)
            }
          </div>
          <div className="w-full h-screen overflow-y-scroll custom-scrollbar xl:w-10/12">
            <div className='md:flex py-2 px-[30px] mb-1'>
              <div className='w-full md:w-9/12'>
                <div>
                  {
                    defaultSortsArr.map((filterName, i) =>
                      <div className='inline-block px-2 py-1 my-[2px] cursor-pointer hover:bg-slate-200 rounded-2xl' onClick={()=>selectedDefaultFilter(i)}>
                        <div className='flex items-center text-[#56575D]'>
                          <p className='text-sm'>{filterName}</p> 
                          {
                            i!==defaultFilterIndex ? <FaAngleDown className='pt-[2px] mx-1 text-lg'/> : <FaAngleUp className='pt-[2px] mx-1 text-lg'/>
                          }
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className='hidden w-3/12 md:block'>
                <div className="w-full flex items-center">
                  <label className='px-3 font-semibold'>Sort&nbsp;By&nbsp;:</label>
                  <Dropdown options={options} className='w-full text-sm font-bold cursor-pointer' menuClassName='custom-scrollbar-dropdown' value={defaultOption} placeholder="Select an option">
                  </Dropdown>
                </div>
              </div>
            </div>
            {
              defaultFilterIndex!==null &&
              <div className='px-[40px]'>
              {
                defaultSortOptionsArr.map((option, i) => <div className='inline-block w-[25%] sm:w-1/6'>
                  <div className='text-sm items-center py-[1px] flex'>
                    <input type="checkbox" className='h-4 w-4' />
                    <p className='pl-1 text-[12px] sm:pl-3 sm:text-[14px]'>{option}</p>
                  </div>
                </div>)
              }
              </div>
            }

            {
              defaultFilterArr.length > 0 &&
              <div className='px-[30px] my-2'>
                <div>
                  {
                    defaultFilterArr.map((filterName, i) =>
                      <div className='inline-block py-1 my-1 mx-1 cursor-pointer bg-slate-200 rounded-2xl'>
                        <div className='flex items-center px-[6px] text-[#56575D]'>
                          <p className='text-sm'>{filterName}</p> <IoIosClose className='pt-[2px] text-lg'/>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            }
            
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 w-full mx-auto px-[30px] gap-10 border-t-[1px] pt-7 mt-3'>
              {
                productArr.map((product,i) => <ProductCard/>)
              }
            </div>
            <div className='flex w-full justify-center mt-14 mb-20'>
              <div className='flex items-center justify-center mx-6 font-bold text-lg tracking-normal border-[1px] rounded-[3px] border-[#c3c2c2] cursor-pointer hover:border-[#424242]' onClick={scrollLeft}><FaChevronLeft className='text-4xl px-[10px]'/></div>
              <div className='pageScroller flex w-4/12 overflow-x-scroll custom-scrollbar'>
                {
                  pageArr.map((page, i) => i!==0 ? <p id={`page${i}`} className='pages px-3 py-1 mx-2 font-bold text-lg tracking-normal border-[1px] rounded-[3px] border-[#c3c2c2] cursor-pointer hover:border-[#424242]' onClick={()=>selectPage(i)}>{i+1}</p> 
                                                  : <p id={`page${i}`} className='pages px-3 py-1 mx-2 font-bold text-lg tracking-normal border-[1px] rounded-[3px] border-[#c3c2c2] cursor-pointer hover:border-[#424242] bg-black text-white' onClick={()=>selectPage(i)}>{i+1}</p>
                  )
                }
              </div>
              <div className='flex items-center justify-center mx-6 font-bold text-lg tracking-normal border-[1px] rounded-[3px] border-[#c3c2c2] cursor-pointer hover:border-[#424242]' onClick={scrollRight}><FaChevronRight className='text-4xl px-[10px]'/></div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 w-full bg-[#ffffff] shadow-md drop-shadow-2xl shadow-black py-2 z-30 md:hidden'>
        <div className='flex font-bold'>
          <div className='w-1/2 flex items-center justify-center cursor-pointer text-black hover:text-[#a19cff] border-r-[1px] border-[#3E3F45]' onClick={switchSortToggle}>
            <BiSortAlt2 className='text-2xl'/> <p>SORT</p>
          </div>
          <div className='w-1/2 flex items-center justify-center cursor-pointer text-black hover:text-[#a19cff]' onClick={switchFilterToggle}>
            <FaFilter className='text-2xl px-1'/> <p>FILTER</p>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 pb-5 w-full z-20 ${filterToggle ? "left-[0%]" : "left-[-100%]"} duration-300 xl:hidden`} onClick={switchFilterToggle}>
        <div className='w-60 h-screen bg-white shadow-xl overflow-y-scroll custom-scrollbar-dropdown'>
          <div className='px-7 pt-[90px] flex items-center'>
              <h2 className="font-bold text-base py-2">FILTERS</h2>
              <p className='flex justify-end w-full text-xs text-[#FF3F6C] font-bold cursor-pointer'><span>CLEAR ALL</span></p>
          </div>
          {
            filterSectionArr.map((product,i) => <FilterSection/>)
          }
        </div>
      </div>
      <div className={`fixed bottom-10 w-full bg-white z-20 ${sortToggle ? "bootom-[40px]" : "bottom-[-100%]"} duration-300 md:hidden`}>
        <div>
          {
            options.map((option,i)=><p className='font-semibold text-base text-[#56575D] py-2 pl-10 my-1 cursor-pointer hover:bg-[#E7E7E8] hover:text-black hover:font-bold'>{option}</p>)
          }
        </div>
      </div>
      <div className='hidden md:block bottom-10 right-10 md:fixed xl:hidden'>
        <div className=' w-10 h-10 rounded-[50%] bg-[#E7E7E8] shadow-xl cursor-pointer flex items-center justify-center hover:scale-105' onClick={switchFilterToggle}>
          <FaFilter/>
        </div>
      </div>
    </>
  )
}

export default Products