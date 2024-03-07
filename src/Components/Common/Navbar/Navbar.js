import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { TbMoodKidFilled } from "react-icons/tb";
import { MdLiving } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const [toggle,setToggle] = useState(false)

  const switchToggle = ()=>{
    setToggle(!toggle);
  }

  return (
    <>
    <nav>
      <div id="navbarContainer" className="fixed z-50 bg-[#FFFFFF] flex w-full h-20 shadow-lg">
        <NavLink to="/" className="flex justify-center items-center cursor-pointer text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold w-5/12 sm:w-3/12 md:w-3/12 lg:w-2/12 xl:w-2/12 2xl:w-2/12" id='companyLogoContainer'>
          Fashion&nbsp;Store
        </NavLink>

        <div className="hidden xl:w-4/12 xl:flex xl:flex-row" id='productLinksContainer'>
            <NavLink to={"products"} className="flex 2xl:px-6 xl:px-4 justify-center font-bold xl:text-sm items-center hover:border-b-4 border-[#C84646] cursor-pointer">MEN</NavLink>
            <NavLink to={"products"} className='flex 2xl:px-6 xl:px-4 justify-center font-bold xl:text-sm items-center hover:border-b-4 border-[#4F47C8] cursor-pointer'>WOMEN</NavLink>
            <NavLink to={"products"} className='flex 2xl:px-6 xl:px-4 justify-center font-bold xl:text-sm items-center hover:border-b-4 border-[#239D56] cursor-pointer'>KIDS</NavLink>
            <NavLink to={"products"} className='flex 2xl:px-6 xl:px-4 justify-center font-bold xl:text-sm items-center hover:border-b-4 border-[#F5B93F] cursor-pointer'>HOME&nbsp;&&nbsp;LIVING</NavLink>
        </div>

        <div className="w-5/12 flex flex-row sm:w-8/12 sm:flex sm:flex-row md:w-5/12 md:flex md:flex-row lg:w-6/12 lg:flex lg:flex-row xl:w-4/12 xl:flex xl:flex-row" id='searchBarContainer'>
          <div className="flex justify-left items-center bg-[#f5f5f6] w-full mx-2 my-5 rounded">
            <IoIosSearch className=" text-4xl p-2"/>
            <input className="bg-[#f5f5f6] w-full mr-4 focus:border-none outline-none" placeholder='Search for Products, brands and more'/>
          </div>
        </div>

        <div className="hidden md:w-3/12 md:flex md:flex-row xl:w-2/12" id='accountLinksContainer'>
          <div className='flex w-[80%] mx-auto'>
            <NavLink to={"profile"} className="flex-1 flex flex-col justify-center items-center cursor-pointer mt-1 hover:scale-105">
              <SlUser className="xl:text-lg 2xl:text-lg mx-auto"/>
              <p className="py-[1px] font-semibold text-center text-sm">Profile</p>
            </NavLink>
            <NavLink to={"wishlist"} className="flex-1 flex flex-col justify-center items-center cursor-pointer mt-1 hover:scale-105">
              <FaRegHeart className="xl:text-lg 2xl:text-lg mx-auto"/>
              <p className="py-[1px] font-semibold text-center text-sm">Wishlist</p>
            </NavLink>
            <NavLink to={"cart"} className="flex-1 flex flex-col justify-center items-center cursor-pointer mt-1 hover:scale-105">
              <HiOutlineShoppingBag className="xl:text-lg 2xl:text-lg mx-auto"/>
              <p className="py-[1px] font-semibold text-center text-sm">Cart</p>
            </NavLink>
          </div>
        </div>

        <div className="w-2/12 flex items-center justify-center sm:w-1/12 sm:flex sm:items-center sm:justify-center md:w-1/12 lg:w-1/12 lg:flex lg:items-center lg:justify-center xl:hidden">
          {
            toggle ? <IoClose onClick={switchToggle} className="text-3xl cursor-pointer"/> :
            <RxHamburgerMenu onClick={switchToggle} className="text-3xl cursor-pointer"/>
          }
        </div>

      </div>
    </nav>

    <div id="sideBar" className={`duration-300 ${toggle ? "left-[0]" : "left-[-100%]"} block pt-28 pl-5 z-40 fixed w-60 h-full bg-[#F3F3F3] shadow-xl xl:hidden`}>

      <div className="flex flex-col" id='productLinksContainer'>

        <h2 className="font-semibold text-xl text-gray-600 ml-2 mt-4">Categories</h2>

        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#C84646] my-2 p-2 cursor-pointer">
          <FaMale className="pt-1 text-2xl"/> <p className="pl-1">MEN</p>
        </div>
        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#4F47C8] my-2 p-2 cursor-pointer">
          <FaFemale className="pt-1 text-2xl"/> <p className="pl-1">WOMEN</p>
        </div>
        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#239D56] my-2 p-2 cursor-pointer">
          <TbMoodKidFilled className="pt-1 text-2xl"/> <p className="pl-1">KIDS</p>
        </div>
        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#F5B93F] my-2 p-2 cursor-pointer">
          <MdLiving className="pt-1 text-2xl"/> <p className="pl-1">HOME&nbsp;&&nbsp;LIVING</p>
        </div>
      </div>

      <div className="flex flex-col mt-10 md:hidden" id='accountLinksContainer'>

        <h2 className="font-semibold text-xl text-gray-600 ml-2 mt-4">Account</h2>

        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#2F2B78] my-2 p-2 cursor-pointer">
          <SlUser className="pt-1 text-2xl"/> <p className="pl-1">Profile</p>
        </div>
        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#2F2B78] my-2 p-2 cursor-pointer">
          <FaRegHeart className="pt-1 text-2xl"/> <p className="pl-1">Wishlist</p>
        </div>
        <div className="flex font-bold text-xl hover:bg-gray-200 hover:rounded hover:border-r-4 hover:border-[#2F2B78] my-2 p-2 cursor-pointer">
          <HiOutlineShoppingBag className="pt-1 text-2xl"/> <p className="pl-1">Cart</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar