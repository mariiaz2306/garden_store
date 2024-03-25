import React from 'react'
import s from './CartProducts.module.css'
import { useSelector } from 'react-redux'
import BasketCard from '../BasketCard/BasketCard'

export const CartProducts = () => {
  const data = useSelector((state) => state.cart.products)

  return (
    <div className={s.cartProductsContainer}>
      {data.length === 0 ? <p className={s.info}>Empty</p> : data.map((elem) => 
      <BasketCard key={elem.id} {...elem} />
      )}
    </div>
  )
}
