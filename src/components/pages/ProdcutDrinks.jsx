import React from 'react'
import { cate_drinks } from '../../Data'

    const ProdcutDrinks = () => {
    return (
        <div className='w-full h-auto  px-6 lg:px-16'>
                {/* title category */}
                <h1 className='py-4 text-4xl  font-bold border-b-2 border-green-500'>All Product in
                    <span className='text-red-500 ml-3'>Categorys Drinks</span>
                </h1>
        
                {/* main-card */}
                <div className='w-full flex flex-wrap gap-7 h-auto py-14' 
                >
                    {/* card */}
                        {cate_drinks.map((p)=>(
                            <div className='w-full md:w-[48%] bg-white lg:w-[23%] h-[430px] overflow-hidden rounded-md shadow shadow-black'>
                                {/* card-header */}
                                <div className='w-full h-[75%] p-2 border-b border-gray-400 bg-green-500'>
                                    <img className='w-full h-full bg-red-200 rounded-md' src={p.image} alt="image" />
                                </div>
                                {/* card-detail */}
                                <div className='w-full h-[25%] p-2'>
                                    <h1 className='text-2xl font-bold'>{p.name}</h1>
                                    <p></p>
                                    <div className='flex justify-between mt-2'>
                                        <h1 className=' py-3 lg:py-1 text-2xl text-green-500 font-bold'>${p.price}</h1>
                                        <button className='bg-green-500 px-5 py-0 cursor-pointer hover:bg-blue-500
                                        transition-all duration-300 ease-in-out text-white rounded-md'>Order Now</button>
                                    </div>
            
                                </div>
                            </div>
                        ))}


                </div>
            </div>
    )
    }

    export default ProdcutDrinks