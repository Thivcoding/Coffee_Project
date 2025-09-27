import React, { useState } from 'react'
import logo from '../assets/icon/starbucks-coffee-logo.png'
import { menu } from '../Data'
import { FaSearchDollar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [openSearch,setOpenSearch] = useState(false);
    const [openSidebar,setOpenSidebar] = useState(false);
  return (
    <div className='w-full sticky top-0 z-50 px-6 lg:px-14 h-auto bg-white shadow-sm'>
        <nav className='w-full h-[100px] flex items-center justify-between'>
            {/* logo and menu */}
            <div className='lg:w-[50%] h-full flex items-center justify-between pr-16'>
                {/* logo */}
                <a href="/home" className='h-full '>
                    <img src={logo} className='w-[80px] lg:w-[100px] h-full lg:py-3 py-4 ' alt="logo" />
                </a>
                {/* menu */}
                <ul className='lg:flex hidden gap-16'>
                   {menu.map((item)=>(
                     <li key={item.id} className='group relative'>
                        <a className='text-xl group-hover:text-blue-500' href={item.url}>{item.name}</a>
                        <span className='absolute h-[3px] left-0 -bottom-1 bg-blue-500 w-0 group-hover:w-full 
                        transition-all duration-500 ease-in-out'></span>
                    </li>
                   ))}
                </ul>
            </div>

            {/* icon */}
            <div className='lg:w-1/2 h-full flex'>
                {/* search */}
                   <div className='lg:w-[80%] lg:flex hidden h-full p-7 pl-14 relative'>
                        <input
                        onClick={()=>setOpenSearch(true)}
                        type="text" className='w-full h-full border rounded-md outline-0 px-5 pr-16 text-gray-500'
                            placeholder='Tell us what you need...'
                        />
                        <FaSearchDollar className='absolute top-10 text-xl right-12' />
                   </div>
                {/* icon */}
                   <div className='lg:w-[20%] h-full flex items-center gap-5 lg:gap-0 justify-around '>
                        <FaRegHeart className='text-xl cursor-pointer lg:flex hidden ' />

                        {/* icon search */}
                        <FaSearchDollar
                        onClick={()=>setOpenSearch(true)}
                        className='lg:text-xl text-2xl cursor-pointer lg:hidden flex' />

                        <div className='relative'>
                            <div className='w-4 h-4 -top-2 -right-2 cursor-pointer bg-red-500 rounded-full flex items-center justify-center text-white absolute'>1</div>
                            <FiShoppingBag className='lg:text-xl text-2xl cursor-pointer' />
                        </div>
                        {/* icon sidebar */}
                        <FaBars className='lg:text-xl text-2xl cursor-pointer lg:hidden flex' accordion
                            onClick={()=>setOpenSidebar(!openSidebar)}
                        />
                        
                        <FaRegUserCircle className='text-xl cursor-pointer lg:flex hidden ' />
                   </div>
            </div>
        </nav>

        {/* open search*/}
        <div className={`w-full h-auto absolute left-0 px-6 md:px-12 transition-all duration-700 ease-in-out ${openSearch ? 'translate-y-0 top-[75px]' : '-translate-y-full -top-3'}`}>
                <div className='w-full h-[150px] flex items-center pt-5 bg-white rounded-md shadow-sm shadow-black/50  px-6 lg:px-16 relative'>
                        <IoCloseSharp className='absolute text-3xl right-5 top-5 cursor-pointer' onClick={()=>setOpenSearch(false)} />
                        <input type="text" className='w-full h-[40%] border rounded-md px-8 outline-0' 
                        placeholder="Tell Us what you need.." />
                </div>
        </div>  

        {/* open sidebar */}
        <div className={`w-[75%] md:w-1/2 h-screen bg-green-600 shadow-lg fixed left-0 top-0 
            transition-all duration-500 ease-in-out
            ${openSidebar ? 'translate-x-0':'-translate-x-full'}`}>
            <div className='w-full h-[100px] relative flex items-center justify-between py-4 border-b border-white'>
                   <img className='w-[80px] h-full' src={logo} alt="" />
                    <IoCloseSharp
                        onClick={()=>setOpenSidebar(false)}
                    className='absolute text-4xl right-5 top-8 cursor-pointer text-white' />
            </div>
            {/* menu */}
            <div className='w-full'>
                {/* menu */}
                <ul>
                   {menu.map((item)=>(
                     <li key={item.id} className='group hover:bg-green-500 transition-all duration-300 ease-in-out relative p-5'>
                        <a className='text-xl group-hover:font-bold text-white' href={item.url}>{item.name}</a>
                    </li>
                   ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar
