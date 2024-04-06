import { createSlice } from '@reduxjs/toolkit'

// Начальное состояние фильтров
const initialState = {
  minPrice: '',
  maxPrice: '',
  discounted: false,
  sorted: '',
}

// Создание среза состояния фильтров
const filterSlice = createSlice({
  name: 'filter', // Имя среза состояния
  initialState, // Начальное состояние
  reducers: {
    // Обработчик изменения минимальной цены
    minPriceChange: (state, action) => ({
      ...state,
      minPrice: action.payload,
    }),
    // Обработчик изменения максимальной цены
    maxPriceChange: (state, action) => ({
      ...state,
      maxPrice: action.payload,
    }),
    // Обработчик изменения флага скидки
    discountChange: (state, action) => ({
      ...state,
      discounted: action.payload,
    }),
    // Обработчик изменения сортировки
    sortedChange: (state, action) => ({
      ...state,
      sorted: action.payload,
    }),
    // Обработчик сброса всех фильтров к начальному состоянию
    resetFilter: (state) => initialState,
  },
})

// Экспорт созданных action creators и редьюсера
export const { minPriceChange, maxPriceChange, discountChange, sortedChange, resetFilter } = filterSlice.actions
export default filterSlice.reducer
