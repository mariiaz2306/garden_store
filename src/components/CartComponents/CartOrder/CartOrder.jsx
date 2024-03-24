import React, {useState} from "react";
import s from "./CartOrder.module.css";
import CheckoutForm from '../../homeComponents/checkoutForm/CheckoutForm';
import CartModalWindow from "../CartModalWindow/CartModalWindow";



export default function CartOrder({ basketCart }) {
    // Используем useState для управления состоянием отправки заказа
    const [sendingOrder, setSendingOrder] = useState(false);

    // Вычисляем общую стоимость всех товаров в корзине
    const totalPrice =
    basketCart?.reduce(
      (acc, { price, discont_price, count }) => acc + count * (discont_price || price),
      0
    ) || 0;

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
              $ {totalPrice.toFixed(2)} {/* Отображаем общую стоимость с округлением до двух знаков после запятой */}
            </p>
           </div >
        </div>

      <CheckoutForm
      setSendingOrder={setSendingOrder}// Передаем функцию для управления состоянием отправки заказа
      classInput={s.input}
      classBtn={s.discount_btn}
      txtBtn="Checkout"
      cartModalWindow = {CartModalWindow}// Передаем компонент модального окна для корзины, 
      //общее упраление модалками прописано в CheckoutForm
       />
        
   </div>
    )
}