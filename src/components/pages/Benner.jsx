import React from 'react'
import benner from '../../assets/images/benner.jpg'

const Benner = () => {
  return (
    <div className='w-full h-[87vh] relative z-0 bg-amber-300'>
        {/* image benner */}
        <img className='w-full absolute h-full bg-blue-400'
         src={benner} alt="" />
         {/* detail benner */}
        <div className='absolute w-full h-full '>
            <div className='w-full flex items-center px-20 h-full'>
                <div className='w-1/2 px-6'>
                    <h1 className='text-white text-7xl font-bold uppercase'>Barkistar Coffee House</h1>
                    <p class="text-gray-300 my-5 fs-5">
                    Discover the rich aroma and bold flavors of Barkistar Coffee,  
                    crafted to awaken your senses and brighten your day.  
                    </p>

                    <button className='bg-green-600 rounded-md text-white px-10 cursor-pointer py-2'>Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benner