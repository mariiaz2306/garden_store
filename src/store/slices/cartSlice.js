import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalSum: 0,
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

//   name: 'cart',
//   initialState,
//   reducers: {
//     addProduct(state, action) {
//       // Ищем, есть ли уже продукт в корзине
//       const existingProductIndex = state.products.findIndex((product) => product.id === action.payload.id)
//       if (existingProductIndex !== -1) {
//         // Если продукт найден, увеличиваем его количество
//         state.products[existingProductIndex].quantity += 1
//         // и обновляем общую сумму, добавляя стоимость продукта
//         state.totalSum += state.products[existingProductIndex].price
//       } else {
//         // Если продукт не найден, добавляем его в массив с количеством 1
//         state.products.push({ ...action.payload, quantity: 1 })
//         // и обновляем общую сумму, добавляя стоимость нового продукта
//         state.totalSum += action.payload.price
//       }

    },

    deleteProduct(state, action) {
      // Находим продукт по id
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload)
      if (existingProductIndex !== -1) {
        // Если продукт найден, вычитаем его общую стоимость из общей суммы
        const existingProduct = state.products[existingProductIndex]
        state.totalSum -= existingProduct.price * existingProduct.quantity
        // и удаляем его из массива продуктов
        state.products.splice(existingProductIndex, 1)
      }
    },

    decreaseProduct(state, action) {
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload)
      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex]
        if (existingProduct.quantity > 1) {
          // Если количество продукта больше 1, уменьшаем его на 1
          existingProduct.quantity -= 1
          // и уменьшаем общую сумму на стоимость одного продукта
          state.totalSum -= existingProduct.price
        } else {
          // Если продукт в количестве 1, удаляем его из корзины
          state.products.splice(existingProductIndex, 1)
          // и уменьшаем общую сумму на его стоимость
          state.totalSum -= existingProduct.price
        }
      }
    },

    clearCart(state) {
      state.products = []
      state.totalSum = 0
    },
  },
})

export const { addProduct, deleteProduct, decreaseProduct, clearCart } = cartSlice.actions
export default cartSlice.reducer
