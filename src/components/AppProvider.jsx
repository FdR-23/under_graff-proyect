import React, { useContext, useReducer } from 'react'
import reducer, { initialState } from '../Reducer/reducer.js';


const AppContext = React.createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <AppContext.Provider value={{
            cart: state.cart,
            products: state.products,
            copyOfProducts:state.copyOfProducts,
            product: state.product,
            categories: state.categories,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider