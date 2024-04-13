import React from 'react'
import { useSelector } from 'react-redux'

import s from './CartProducts.module.css'
import CartCard from '../CartCard/CartCard'

export const CartProducts = () => {
  const data = useSelector((state) => state.cart.products)
  return (
    <div className={s.cartProductsContainer}>
      {data.length === 0 ? <p className={s.info}>Empty</p> : data.map((elem) => <CartCard key={elem.id} {...elem} />)}
    </div>
  )
}
