import React from 'react'
import { IoIosSearch } from "react-icons/io";

const FilterSection = () => {

    const arr=[1,2,3,4,5,6,7,8,9]

    return (
        <div className="border-t-[1px] px-7">
            <div className='flex items-center pt-3'>
            <h3 className='font-bold text-sm justify-start'>CATEGORIES</h3>
            <span className="flex justify-end w-full">
                <IoIosSearch className='cursor-pointer text-[25px] rounded-full bg-[#e6e6e6] p-[4px]'/>
            </span>
            </div>
            <div className="py-3">
            {
                arr.map((item, i) =><div className='flex text-base items-center py-[1px]'>
                <input type="checkbox" className='h-4 w-4'/>
                <p className='pl-3 text-[16px]'>Tshirts</p>
                <span className='px-1 text-[12px] text-[#6E6F74]'>(1234568)</span>
                </div>)
            }
            <div className='flex text-base items-center py-[1px]'>
                <p className='pl-7 py-1 text-[16px] text-[#FF3F6C] cursor-pointer'>+ 49 more</p>
            </div>
            </div>
        </div>
    )
}

export default FilterSection