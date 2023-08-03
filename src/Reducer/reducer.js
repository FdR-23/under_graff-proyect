import { TYPE } from "./actions";

import data_c from '../db/categories.json'
import data_p from '../db/products.json'



export const initialState = {
    categories: data_c.categorias,
    products: data_p.productos
};
const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    };
}


export default reducer

