import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalSum: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
           const objectExists = state.products.find((product) => product => product.id === action.payload.id)
           objectExists
           ? (objectExists.quantity +=1)
            : state.products.push({...action.payload, quantity: 1})
        },
        deleteProduct(state, action) {
           const index= state.products = state.products.findIndex(product => product.id !== action.payload.id)
           
        },
        decreaseProduct( state, action) {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        clearCart(state) {
            state.products = []
        },
        countTotalSum(state) {
           const total = state.products.reduce((acc, current) => acc + current.price * current.quantity, 0)
           state.totalSum = total;
    },
}
})

export const {addProduct, deleteProduct, decreaseProduct, clearCart, countTotalSum} = cartSlice.actions
export default cartSlice.reducer