import React, {useState} from "react";
import s from "../discountForm/DiscountForm.scss";
import img_discount_form from "../../../media/images/Discount.svg";
import ModalWindow from "../modalWindow/ModalWindow";
import CheckoutForm from "../checkoutForm/CheckoutForm";





export default function DiscountForm(){
    const [showModal, setShowModal] = useState(false);
    const [buttonText, setButtonText] = useState("Get a discount");

    const handleDiscountSubmit=()=>{
        setShowModal(true);
        setButtonText("Thank you, request is submitted!");
    }

    return(
        <div className={s.form_wrapper} id="discount">
            <h2 className={s.form_text}>5% off on the first discount</h2>
            <div className={s.inform}>
                <img 
                src={img_discount_form} 
                alt="discount form"
                className={s.discount_img}
                />
              <CheckoutForm
                handleDiscountSubmit={handleDiscountSubmit}
                classInput={s.discount_input}
                classBtn={s.discount_btn}
                textBtn={buttonText}
                />
            </div>
          <ModalWindow showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}