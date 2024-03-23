import React from "react";
import s from "../CartModalWindow/CartModalWindow.module.css";

export default function CartModalWindow({ onClose }) {
  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={onClose}>&times;</span>
        <p className = {s.congrats}> <span>Congratulations!</span> <br /> Your order has been successfully placed on the website. <br />A manager will contact you shortly to confirm your order</p>
      </div>
    </div>
  );
}