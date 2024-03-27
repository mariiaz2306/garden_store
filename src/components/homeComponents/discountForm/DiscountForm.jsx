import React, { useState } from "react";
import s from "../discountForm/DiscountForm.module.css";
import img_discount_form from "../../../media/images/Discount.svg";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useDispatch } from 'react-redux';
import { applyDiscount } from "../../../store/slices/cartSlice";

export default function DiscountForm() {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [buttonText, setButtonText] = useState("Get a discount");

  const handleDiscountSubmit = (e) => {
    console.log('Form submitted')
    setShowModal(true)
    setButtonText('Request Submitted')
    dispatch(applyDiscount()) // Диспатчим экшен применения скидки
  };

  return (
    <div className={s.form_wrapper} id="discount">
      <h2 className={s.form_text}>5% off on the first order</h2>
      <div className={s.inform}>
        <img
          src={img_discount_form}
          alt="Discount form"
          className={s.discount_img}
        />
        <CheckoutForm
          handleDiscountSubmit={handleDiscountSubmit}
          classInput={s.discount_input}
          classBtn={s.discount_btn}
          txtBtn={buttonText}
          cartModalWindow={ModalWindow}
        />
      </div>
      {showModal && (
        <ModalWindow onClose={() => setShowModal(false)}>
          <p className={s.congrats}>Your discount of 5% has been received!</p>
        </ModalWindow>
      )}
    </div>
  );
}