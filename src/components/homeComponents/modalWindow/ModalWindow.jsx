import React from "react";
import s from "../modalWindow/ModalWindow.scss";
import iconModalCross from "../../../media/icons/ModalCross.svg"



export default function ModalWindow({showModal, setShowModal}){
    const sendingOrder = showModal;

    const closeModal = ()=>{
        setShowModal(false)
    }

    return(
        <div
        className={sendingOrder ? `${s.modal_container}` : `${s.modal_close}`}
        >
       <div className={s.modal_window}>
        <div className={s.txt_cotainer}>
            <h4 className={s.title}>Your order is on its way!</h4>
            <img
             src={iconModalCross}
             alt="Close Modal" 
             onClick={()=> closeModal()}
             className={s.btn_close}
             />
        </div>
      <p className={s.modal_txt}>Your discount is 5 %</p>
       </div>
    </div>
    )
}