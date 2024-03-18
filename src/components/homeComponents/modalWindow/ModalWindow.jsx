
import React from "react";
import s from "../modalWindow/ModalWindow.module.css";

export default function DiscountModal({ onClose }) {
  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={onClose}>&times;</span>
        <p className = {s.congrats}>Congratulations! Your discount of 5% has been received!</p>
      </div>
    </div>
  );
}
