import React from 'react'
import Img1 from "../../Images/Others/img1.jpg"
import Img2 from "../../Images/Others/img2.jpeg"
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from 'react-icons/fa6';


const Deals = () => {

    const dummyArr = [1,2,3,4,5,6,7,8]

    const scrollLeft = () => {
        const scrollableElement = document.querySelector(".dealsScroller")
        scrollableElement.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust scroll amount as needed
        };
        
    const scrollRight = () => {
        const scrollableElement = document.querySelector(".dealsScroller")
        scrollableElement.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust scroll amount as needed
    };

  return (
    <div className='h-[48vh] mt-16 sm:h-[62vh]'>
        <h1 className="font-medium font-serif -tracking-tighter text-center py-5 bg-gradient-to-r from-lime-200 via-white to-lime-200 text-[#000000] shadow-md shadow-[#8f8f8f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Deals&nbsp;&&nbsp;Offers</h1>
        <div className='relative'>
            <div onClick={scrollLeft} className='absolute h-[36vh] sm:h-[47vh] mt-2 flex items-center z-10 w-[50px] justify-center cursor-pointer duration-300 hover:bg-[#21212155]'>
                <FaChevronLeft className='text-5xl font-extrabold text-[#beffd0]'/>
            </div>
            <div onClick={scrollRight} className='absolute h-[36vh] sm:h-[47vh] mt-2 flex items-center right-0 z-10 w-[50px] justify-center cursor-pointer duration-300 hover:bg-[#21212155]'>
                <FaChevronRight className='text-5xl font-extrabold text-[#beffd0]'/>
            </div>
            <div className='dealsScroller custom-scrollbar my-5 px-2 py-2 flex flex-row overflow-x-scroll gap-3'>
                {
                    dummyArr.map((dummy) => 
                    <div id='dealCard' className="relative min-w-[230px] h-[36vh] sm:min-w-[320px] sm:h-[47vh] cursor-pointer hover:scale-[1.01]">
                        <img src={Img1} className='absolute w-full h-full rounded-[5px] shadow-md shadow-[#5f5f5f]'/>
                        <div className='absolute w-full h-full flex items-end justify-center'>
                            <div className='bg-gradient-to-r from-lime-200 via-white to-lime-200 h-[13vh] sm:h-[16vh] w-full m-1 rounded-[5px]'> 
                                <div className='h-[6vh] sm:h-[7vh] w-full bg-white rounded-[5px] flex items-center'>
                                    <img className='w-6/12 h-[80%] mx-auto object-fit' src={Img2}/>
                                </div>
                                <div className='text-center'>
                                    <p className='text-lg sm:text-2xl font-semibold pt-1'>Classic&nbsp;Comfortable&nbsp;Kicks</p>
                                    <p className='text-xl sm:text-3xl font-bold'>Min.&nbsp;45%&nbsp;OFF</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Deals