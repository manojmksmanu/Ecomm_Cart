import React, { useReducer } from 'react'
import { Context } from './Context'
import Reducer from './Reducer'

const ContextProvider = ({ children }) => {

    const initialState = [{
        name: "hello",
        age: 23,
    }];

    const [state, dispatch] = useReducer(Reducer, initialState);


    return (
        <Context.Provider value={{ state }} >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider