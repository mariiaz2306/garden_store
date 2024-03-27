import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalSum: 0,
  discountApplied: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload.id)
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1
      } else {
        state.products.push({ ...action.payload, quantity: 1 })
      }

      // Пересчитываем общую сумму, учитывая скидочную цену
      state.totalSum = state.products.reduce((total, product) => {
        const priceToUse = product.discont_price ? product.discont_price : product.price
        return total + priceToUse * product.quantity
      }, 0)
    },

    deleteProduct(state, action) {
      const index = state.products.findIndex((product) => product.id === action.payload)
      if (index !== -1) {
        const product = state.products[index]
        const priceToUse = product.discont_price ? product.discont_price : product.price
        state.totalSum -= priceToUse * product.quantity
        state.products.splice(index, 1)

        // Пересчитываем общую сумму после удаления товара
        state.totalSum = state.products.reduce((total, product) => {
          const priceToUse = product.discont_price ? product.discont_price : product.price
          return total + priceToUse * product.quantity
        }, 0)
      }
    },

    decreaseProduct(state, action) {
      const index = state.products.findIndex((product) => product.id === action.payload)
      if (index !== -1) {
        const product = state.products[index]
        if (product.quantity > 1) {
          product.quantity -= 1
          const priceToUse = product.discont_price ? product.discont_price : product.price
          state.totalSum -= priceToUse
        } else {
          const priceToUse = product.discont_price ? product.discont_price : product.price
          state.totalSum -= priceToUse
          state.products.splice(index, 1)
        }

        // Пересчитываем общую сумму после изменения количества
        state.totalSum = state.products.reduce((total, product) => {
          const priceToUse = product.discont_price ? product.discont_price : product.price
          return total + priceToUse * product.quantity
        }, 0)
      }
    },

    clearCart(state) {
      state.products = []
      state.totalSum = 0
      state.discountApplied = false
    },

    applyDiscount(state) {
      state.discountApplied = true
    },
  },
})

export const { addProduct, deleteProduct, decreaseProduct, clearCart, applyDiscount } = cartSlice.actions
export default cartSlice.reducer
