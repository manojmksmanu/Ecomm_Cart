import React, { useContext } from 'react'
import { Context } from '../Context/Context'
// import React,{ useContext } from 'react';
// import { Context } from './Context';
import UseContext from '../Context/UseContext'

const Cart = () => {
  const data1 = UseContext();
  console.log(data1)
  // const {data} = useCart;
  return (
    <div className='text-4xl' >{ }</div>
  )
}

export default Cart