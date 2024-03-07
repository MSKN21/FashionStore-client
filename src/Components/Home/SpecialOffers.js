import React from 'react'
import Img1 from "../../Images/Others/img1.jpg"

const SpecialOffers = () => {

    const dummyArr = [1,2,3,4,5,6,7,8,99,1,2,3,4,5,6,7,8,9]

    return (
        <div className='mt-16'>
            <h1 className=" font-medium font-serif -tracking-tighter text-center py-5 bg-[#2a142e] text-[#FFFFFF] shadow-md shadow-[#0000005e] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">CATEGORY&nbsp;SPECIALS</h1>
            <div className="w-11/12 mx-auto grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {   
                    dummyArr.map((dummy,index)=>
                        <div className="bg-[#242250] w-[230px] p-3 my-6 mx-auto rounded-[3px] shadow-md shadow-[#5f5f5f] cursor-pointer hover:scale-[1.01]">
                            <div className="bg-white h-[30vh]">
                                <img className="w-full h-full object-cover" src={Img1}/>
                            </div>
                            <p className="text-center text-[#FFFFFF] text-2xl font-semibold py-1">T-Shirts</p>
                            <p className="text-center text-[#FFFFFF] text-3xl font-bold">40-80%&nbsp;OFF</p>
                            <p className="text-center text-[#FFFFFF] text-2xl font-semibold pt-1"> Shop&nbsp;Now</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SpecialOffers