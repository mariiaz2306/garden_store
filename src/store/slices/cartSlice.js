import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
   products: [
     {
       id: 3,
       title: 'Angelonia angustifolia Archangel™ Blue Bicolor',
       price: 10.75,
       discont_price: null,
       description:
         'This Summer Snapdragon is part of the Archangel™ series that produces large flowers. Angelonia angustifolia Archangel™ Blue Bicolor is an outstanding performer, offering a long season of color in containers and garden beds. Plants are well-branched with bicolored blossoms of deep purple and soft lilac backed by glossy, dark green leaves.',
       image: '/product_img/3.jpeg',
       createdAt: '2022-10-02T14:43:29.000Z',
       updatedAt: '2022-10-02T14:43:29.000Z',
       categoryId: 1,
       quantity: 1,
     },
     {
       id: 7,
       title: 'Salvia `Wendy`s Wish`',
       price: 11.5,
       discont_price: 11.1,
       description:
         'In spring, our Director of Horticulture loves to plant the vigorous Australian Salvia `Wendy`s Wish` next to his back porch. Each morning as he sits outside enjoying his coffee, he watches the hummingbirds savor the sweet nectar from the tubular blossoms. Right up until frost, ‘Wendy’s Wish’ throws spike after spike of vivid magenta-pink blooms with fluted tips on maroon stems.',
       image: '/product_img/7.jpeg',
       createdAt: '2022-10-02T14:43:29.000Z',
       updatedAt: '2022-10-02T14:43:29.000Z',
       categoryId: 1,
       quantity: 1,
     },
   ],
   totalSum: 0,
 }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      // Ищем, есть ли уже продукт в корзине
      const existingProductIndex = state.products.findIndex((product) => product.id === action.payload.id)
      if (existingProductIndex !== -1) {
        // Если продукт найден, увеличиваем его количество
        state.products[existingProductIndex].quantity += 1
        // и обновляем общую сумму, добавляя стоимость продукта
        state.totalSum += state.products[existingProductIndex].price
      } else {
        // Если продукт не найден, добавляем его в массив с количеством 1
        state.products.push({ ...action.payload, quantity: 1 })
        // и обновляем общую сумму, добавляя стоимость нового продукта
        state.totalSum += action.payload.price
      }
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
