import React, { useEffect } from 'react'
import { CartProducts } from '../CartProducts/CartProducts'
import CartOrder from '../CartOrder/CartOrder'
import { useSelector } from 'react-redux'
import { saveCartItems } from '../../../utils/cartLocalStorage'
import s from './CartComponent.module.css'
import EmptyCartComponent from '../EmptyCartComponent/EmptyCartComponent'

function CartComponent() {
  const basketCart = useSelector((state) => state.cart.products)
  //isCartEmpty мы будем использовать для общего контенера на странице если корзина пуста то показывать пустую страницу,
  //пока только идея
  const isCartEmpty = basketCart.length === 0
  const breadcrumbs = [{ label: 'Back to all products', path: '/products' }]
  useEffect(() => {
    // здесь нужно создать сохранение данных о заказе
    saveCartItems(basketCart)
  }, [basketCart])

  
  return isCartEmpty ? (
    <EmptyCartComponent />
  ) : (
    <div className={s.container}>
      <CartProducts />
      <CartOrder basketCart={basketCart} />
    </div>
  )
}

export default CartComponent
