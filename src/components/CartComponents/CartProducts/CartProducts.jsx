import React from 'react'
import { useSelector } from 'react-redux'

import s from './CartProducts.module.css'
import BasketCard from '../BasketCard/BasketCard'

export const CartProducts = () => {
  const data = useSelector((state) => state.cart.products)
  const cart = useSelector((state) => state.cart)
  console.log(`cart`, cart)
  return (
    <div className={s.cartProductsContainer}>
      {data.length === 0 ? <p className={s.info}>Empty</p> : data.map((elem) => <BasketCard key={elem.id} {...elem} />)}
    </div>
  )
}
