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
            // Исправленная строка: удалено лишнее объявление функции внутри find
            const objectExists = state.products.find(product => product.id === action.payload.id);
            if (objectExists) {
                objectExists.quantity += 1; // Если объект существует, увеличиваем количество
            } else {
                state.products.push({...action.payload, quantity: 1}); // Иначе, добавляем новый объект
            }
        },
        
        deleteProduct(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload.id);
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