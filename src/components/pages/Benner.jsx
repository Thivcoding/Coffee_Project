import React from 'react'
import benner from '../../assets/images/benner.jpg'

const Benner = () => {
  return (
    <div className='w-full h-[87vh] md:h-[500px] lg:h-[87vh] relative z-0 bg-amber-300'>
        {/* opacity */}
        <div className='w-full h-full absolute top-0 left-0 bg-black/30 z-2'></div>
        {/* image benner */}
        <img className='w-full absolute h-full bg-blue-400'
         src={benner} alt="" />
         {/* detail benner */}
        <div className='absolute w-full h-full z-5 '>
            <div className='w-full flex items-center px-4 md:px-10 lg:px-20 h-full'>
                <div className='w-full md:w-1/2 px-6'>
                    <h1 className='text-white text-4xl md:text-4xl lg:text-7xl font-bold uppercase 
                    animate__animated animate__zoomInDown
                    '>Barkistar Coffee House</h1>
                    <p class="text-gray-300 my-5 fs-5 animate__animated animate__zoomInDown">
                    Discover the rich aroma and bold flavors of Barkistar Coffee,  
                    crafted to awaken your senses and brighten your day.  
                    </p>

                    <button className='bg-green-600 rounded-md text-white px-10 cursor-pointer py-2
                    animate__animated animate__zoomInDown
                    '>Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benner