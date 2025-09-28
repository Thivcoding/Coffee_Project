import React from 'react'
import { categories } from '../../Data'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='w-full h-auto  px-6 lg:px-16'>
        {/* title category */}
        <h1 className='py-4 text-4xl  font-bold border-b-2 border-green-500'>All 
            <span className='text-red-500 ml-3'>Categorys</span>
        </h1>

        {/* main-card */}
        <div className='w-full flex flex-wrap gap-7 h-auto py-14' 
        >
            {/* card */}
            {categories.map((cate)=>(
                <div key={cate.id} className='w-full md:w-[48%] bg-white lg:w-[23%] h-[450px] overflow-hidden rounded-md shadow shadow-black'>
                    {/* card-header */}
                    <div className='w-full h-[65%] p-2 border-b border-gray-400 bg-green-500'>
                        <img className='w-full h-full bg-red-200 rounded-md' src={cate.imageUrl} alt="image" />
                    </div>
                    {/* card-detail */}
                    <div className='w-full h-[35%] p-2'>
                        <h1 className='text-2xl font-bold'>{cate.name}</h1>
                        <p className=' py-3 mb-2 lg:py-2'>{cate.description}</p>
                    
                        <Link to={cate.link} className='bg-blue-500 px-5 py-2 cursor-pointer hover:bg-pink-500
                        transition-all duration-300 ease-in-out text-white rounded-md'>View More</Link>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category