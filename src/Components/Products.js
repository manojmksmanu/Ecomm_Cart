import React from 'react'
import UseContext from '../Context/UseContext'
import Card from './Card';
const Products = () => {
    console.log("on product page")

    const products = UseContext().products;
    products.map((e) => {
        console.log(e)
    })
    return (
        <div className='flex justify-center mt-2'>
            <div className='flex md:w-10/12 justify-evenly'>
                {
                    products.map((e) => {
                        return <Card product={e} key={e.id} />
                    })
                }
            </div>
        </div>

    )
}

export default Products