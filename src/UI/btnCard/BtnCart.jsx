import React, { useState } from "react";
import s from "./BtnCart.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";



export const ButtonTypes = {
    ADD_TO_CART: "ADD_TO_CART",
   
};

export default function BtnCart({type}){
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleClick = ()=>{
        if(type === ButtonTypes.ADD_TO_CART){
            setIsSubmitting(true);
            setTimeout(()=>setIsSubmitting(false), 2000);
        }
    }


    const buttonClass = classNames(s.card_btn, {
        [s.add_btn]: type === ButtonTypes.ADD_TO_CART,
        [s.submitted]: isSubmitting,
        [s.btn_green]:
          type === ButtonTypes.ADD_TO_CART  ||
          type === ButtonTypes.GO_HOME
    });

    const addBtnClass = classNames(s.add_btn, {
        [s.disabled_hover]: isSubmitting && type === ButtonTypes.ADD_TO_CART,
    });

    return(
        <div className={buttonClass}>
            {type === ButtonTypes.ADD_TO_CART && (
                <button onClick = {handleClick} className={addBtnClass}>
                    {isSubmitting ? "Added" : "Add to cart"}
                </button>
            )}


            {type === ButtonTypes.GO_HOME && (
               <Link to ={"/"}>
                   <button className={s.btn_green}>Go Home</button>
               </Link>
            )}
        </div>
    )

    
}