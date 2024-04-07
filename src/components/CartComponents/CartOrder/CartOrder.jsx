import React, { useState } from 'react'

import s from './CartOrder.module.css'

import ModalWindow from '../../homeComponents/ModalWindow/ModalWindow'
import CheckoutForm from '../../homeComponents/checkoutForm/CheckoutForm'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../../store/slices/cartSlice'

export default function CartOrder({ basketCart }) {
  // Используем useState для управления состоянием отправки заказа
  const dispatch = useDispatch()
  const [sendingOrder, setSendingOrder] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleDiscountSubmit = () => {
    setShowModal(true)
  }

  const handleOrderSubmit = () => {
    setSendingOrder(true) // Устанавливаем sendingOrder в true при отправке заказа
    setShowModal(true) // Показываем модальное окно при отправке заказа
    dispatch(clearCart()) // очистка корзині
  }
  const totalSum = useSelector((state) => state.cart.totalSum)
  const discountApplied = useSelector((state) => state.cart.discountApplied)

  // Вычисляем итоговую сумму с учетом скидки
  const finalTotalSum = discountApplied ? totalSum * 0.95 : totalSum

  // const finalTotalSum = totalSum;

  return (
    <div className={s.container}>
      {/* Заголовок деталей заказа */}
      <h3 className={s.h3_order}>Order Details</h3>

      {/* Отображение общего количества товаров в корзине */}
      <div className={s.total_items}>
        <p className={s.total_items_sum}>{basketCart.length} items</p>
      </div>

      {/* Отображение общей стоимости заказа */}
      <div className={s.total_price}>
        <p className={s.total_p}>Total</p>
        <div>
          <p className={s.total_sum}>
            $ {finalTotalSum.toFixed(2)} {/* Отображаем общую стоимость с округлением до двух знаков после запятой */}
          </p>
        </div>
      </div>

      <CheckoutForm
        handleOrderSubmit={handleOrderSubmit}
        handleDiscountSubmit={handleDiscountSubmit}
        classInput={s.input}
        classBtn={s.discount_btn}
        txtBtn="Checkout"
        cartModalWindow={ModalWindow}
      />
      {showModal && (
        <ModalWindow onClose={() => setShowModal(false)}>
          <p className={s.congrats}>Your order has been successfully placed on the website.</p>
          <p className={s.congrats}>A manager will contact you shortly to confirm your order.</p>
        </ModalWindow>
      )}
    </div>
  )
}
