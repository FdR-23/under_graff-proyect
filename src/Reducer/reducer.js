import { TYPE } from "./actions";

import data_c from '../db/categories.json'
import data_p from '../db/products.json'
import data_products from '../db/products1.js'
import data_categories from '../db/categories.js'

//const cartStorage = JSON.parse(localStorage.getItem("Cart"));



export const initialState = {
    cart: [],
    categories: data_categories,
    products: data_products.productos,
    copyOfProducts: data_products.productos,
    product: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case TYPE.GET_ALL_PRODUCTS: {
        //     return {
        //         ...state,
        //         products: action.payload,
        //         copyOfProducts: action.payload
        //     }
        // };
        // case TYPE.GET_ALL_CATEGORIES: {
        //     return {
        //         ...state,
        //         categories: action.payload
        //     }
        // };

        case TYPE.FILTER_BY_CATEGORIES: {
            let filtered = state.copyOfProducts.filter((element) => element.categoria_id === action.payload?.id)
            if (filtered.length > 0) {
                return {
                    ...state,
                    products: [...filtered]
                }
            } else {
                return {
                    ...state,
                    products: state.copyOfProducts
                }
            }
        };
        case TYPE.FIND_PRODUCT_BY_ID: {
            const id = action.payload;
            let findyProduct = state.copyOfProducts.find((element) => element.id === id);
            if (findyProduct) {
                return {
                    ...state,
                    product: findyProduct
                }
            } else {
                return { ...state }
            }
        };

        case TYPE.ADD_TO_CART: {
            const { quantity, id, price, stock } = action.payload;
            const findItem = state.cart.find((item) => item.id === id);
            if (findItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === id ? {
                            ...item,
                            quantity: item.quantity + quantity,
                            price: item.price + (price * quantity),
                            stock: stock
                        } : item
                    ),
                    products: state.products.map((item) => item.id === id ? { ...item, stock: item.stock - quantity } : item),
                    copyOfProducts: state.copyOfProducts.map((item) => item.id === id ? { ...item, stock: item.stock - quantity } : item),
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                    products: state.products.map((item) => item.id === id ? { ...item, stock: item.stock - quantity } : item),
                    copyOfProducts: state.copyOfProducts.map((item) => item.id === id ? { ...item, stock: item.stock - quantity } : item),
                }
            }
        };
        case TYPE.INCREMENT_PRODUCT_CART: {
            const id = action.payload;
            const foundInCart = state.cart.find((item) => item.id === id);
            if (foundInCart) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === id ? {
                            ...item,
                            quantity: item.quantity + 1,
                            price: ((item.price * (item.quantity + 1)) / foundInCart.quantity),
                            stock: item.stock - 1,
                        } : item),
                    products: state.products.map((item) => item.id === id ? { ...item, stock: item.stock - 1 } : item),
                    copyOfProducts: state.copyOfProducts.map((item) => item.id === id ? { ...item, stock: item.stock - 1 } : item),
                }
            }
            else {
                return { ...state }
            }
        };
        case TYPE.DECREMENT_PRODUCT_CART: {
            const id = action.payload;
            const foundInCart = state.cart.find((item) => item.id === id);
            if (foundInCart) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === id ? {
                            ...item,
                            quantity: item.quantity - 1,
                            price: ((item.price * (item.quantity - 1)) / foundInCart.quantity),
                            stock: item.stock + 1,
                        } : item),
                    products: state.products.map((item) => item.id === id ? { ...item, stock: item.stock + 1 } : item),
                    copyOfProducts: state.copyOfProducts.map((item) => item.id === id ? { ...item, stock: item.stock + 1 } : item),
                }
            } else {
                return { ...state }
            }
        };
        case TYPE.DELETE_PRODUCT_CART: {
            const id = action.payload;
            const foundInCart = state.cart.find((item) => item.id === id);
            if (foundInCart) {
                const filterCart = state.cart.filter((element) => element.id !== id)
                return {
                    ...state,
                    cart: [...filterCart],
                    products: state.products.map((item) => item.id === id ? { ...item, stock: item.stock + foundInCart.quantity } : item),
                    copyOfProducts: state.copyOfProducts.map((item) => item.id === id ? { ...item, stock: item.stock + foundInCart.quantity } : item),
                }
            } else {
                return { ...state }
            }
        };


        default:
            return state
    };
}


export default reducer

