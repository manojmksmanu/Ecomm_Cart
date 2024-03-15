import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
const Card = ({ product }) => {
    console.log(product, "hello")
    console.log("on card components")
    return (
        <div className="" >
            <div className='m-10 flex  max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md '>
                <div className='relative mx-3 mt-3 flex  h-60 overflow-hidden rounded-xl justify-center'>
                    <img className='relative mx-3 mt-3 flex  rounded-xl  border border-gray-200 bg-white shadow-md' src={product.imgUrl} />
                    <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-700 px-2 text-center text-sm font-medium text-white">39% OFF</span>
                </div>
                <div className='mt-4 px-5 pb-5'>
                    <h5 className='text-xl tracking-tight text-slate-900'>
                        {product.name}
                    </h5>
                    <div class="mt-2  flex items-center justify-between">
                        <p>
                            <span class="text-3xl font-bold text-slate-900">{product.price}</span>
                            <span class="text-sm text-slate-900 line-through">$699</span>
                        </p>
                    </div>
                </div>
                <div class="mt-1 px-5 pb-5">


                    <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <FaCartArrowDown className='text-2xl mr-3' />
                        Add to cart</a
                    >
                </div>
            </div>
        </div >
    )
}

export default Card