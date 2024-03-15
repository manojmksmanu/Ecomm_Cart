import React, { useReducer } from 'react'
import { Context } from './Context'
import Reducer from './Reducer'

const ContextProvider = ({ children }) => {
    const products = [
        {
            imgUrl: "https://m.media-amazon.com/images/I/61pt59LW-lL._SX679_.jpg",
            name: "IQOO Z9 5G",
            Id: "1",
            price: "₹19,999"
        },
        {
            imgUrl: "https://m.media-amazon.com/images/I/41yAce7gd4L._SX300_SY300_QL70_FMwebp_.jpg",
            name: "iQOO Z7 Pro 5G ",
            id: "2",
            price: " ₹24,999"
        },
    ]
    const cart = [24];
    const initialState =
    {
        products: products
        ,
        cart: cart
    };


    const [state, dispatch] = useReducer(Reducer, initialState);


    return (
        <Context.Provider value={state} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider