import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='md:w-full flex justify-center'>
            <div className="bg-indigo-100 md:w-screen md:backdrop-blur-md  flex justify-between items-center p-4 px-8">
                <div className='text-3xl font-bold '>
                    ECOMM
                </div>
                <div>
                    <ul className='md:flex gap-5 text-xl'>
                        <li className='hover:text-opacity-80 duration-100 cursor-pointer'>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Products
                        </li>
                    </ul>
                </div>

                <div>
                    <button>
                        <FaCartArrowDown className='text-2xl' />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Navbar