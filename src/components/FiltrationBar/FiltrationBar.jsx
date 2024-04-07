import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { maxPriceChange, minPriceChange, discountChange, sortedChange } from '../../store/slices/filterSlice'

import './FiltrationBar.scss'

const FiltrationBar = ({ showDiscountOption }) => {
  // Получаем доступ к диспетчеру Redux
  const dispatch = useDispatch()

  // Получаем значения фильтров из хранилища Redux
  const { discounted } = useSelector((state) => state.filter)

  return (
    <form>
      {/* Фильтр по цене */}
      <label htmlFor="price">
        Price
        {/* Ввод минимальной цены */}
        <input
          type="number"
          id="minPrice"
          placeholder="from"
          onChange={(event) => dispatch(minPriceChange(event.target.value))}
        />
        {/* Ввод максимальной цены */}
        <input
          type="number"
          id="maxPrice"
          placeholder="to"
          onChange={(event) => dispatch(maxPriceChange(event.target.value))}
        />
      </label>

      {/* Опция фильтрации по скидке (если showDiscountOption === true) */}
      {showDiscountOption && (
        <label htmlFor="discount" className="discount">
          Discounted items
          {/* Чекбокс для отображения скидок */}
          <input
            type="checkbox"
            id="discount"
            checked={discounted}
            onChange={(event) => dispatch(discountChange(event.target.checked))}
          ></input>
          {/* Стилизованный чекбокс */}
          <span className="custom-checkbox"></span>
        </label>
      )}

      {/* Сортировка */}
      <label htmlFor="sort">
        Sorted
        {/* Выбор метода сортировки */}
        <select id="sort" onChange={(event) => dispatch(sortedChange(event.target.value))}>
          <option>by default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="nameAz">Name: A to Z</option>
          <option value="nameZa">Name: Z to A</option>
        </select>
      </label>
    </form>
  )
}

export default FiltrationBar
