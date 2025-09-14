import React from 'react'
import logo from '../assets/icon/starbucks-coffee-logo.png'
import { menu } from '../Data'
import { FaSearchDollar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full px-6 lg:px-14 h-auto bg-white shadow-sm'>
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
                        <input type="text" className='w-full h-full border rounded-md outline-0 px-5 pr-16 text-gray-500'
                            placeholder='Tell us what you need...'
                        />
                        <FaSearchDollar className='absolute top-10 text-xl right-12' />
                   </div>
                {/* icon */}
                   <div className='lg:w-[20%] h-full flex items-center gap-8 lg:gap-0 justify-around '>
                        <FaRegHeart className='text-xl cursor-pointer lg:flex hidden ' />

                        <div className='relative'>
                            <div className='w-4 h-4 -top-2 -right-2 cursor-pointer bg-red-500 rounded-full flex items-center justify-center text-white absolute'>1</div>
                            <FiShoppingBag className='lg:text-xl text-2xl cursor-pointer' />
                        </div>
                        {/* icon sidebar */}
                        <FaBars className='lg:text-xl text-2xl cursor-pointer lg:hidden flex' />
                        
                        <FaRegUserCircle className='text-xl cursor-pointer lg:flex hidden ' />
                   </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
