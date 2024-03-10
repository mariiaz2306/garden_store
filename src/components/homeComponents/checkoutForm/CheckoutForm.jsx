import React from "react";
import {useForm } from "react-hook-form";
import s from "../checkoutForm/CheckoutForm.scss";

export default function CheckoutForm({setSendingOrder, handleDiscountSubmit, classInput, classBtn, txtBtn}){
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({mode: "onBlur"});

    const onSubmit = (formData)=>{
reset()
setSendingOrder && setSendingOrder(true)
handleDiscountSubmit && handleDiscountSubmit()
}


return(
    <form className={s.form_container} onSubmit={handleSubmit(onSubmit)}>
        <label className={s.input_container}>

            {/* name input */}
            <input
             type="text"
             placeholder="Name"
             {...register("name", {
               required: "Name is required",
            
             })}
             className={`${s.input} ${classInput}`}
             />
             {errors?.name && <p className={s.error_message}>{errors?.name?.message || "Error"}
             </p>
             }

              {/* Phone Input */}
             <input
             type="tel"
             placeholder="Phone number"
             {...register("phone", {
               required: "Phone number is required",
               minLength: {
                 value: 13,
                 message: "Phone number must be at least 13 characters"
               },
               maxLength: {
                 value: 13,
                 message: "Phone number must be at most 13 characters"
               },
               pattern: {
                 value: /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                 message: "Please enter a valid phone number"
               },
             })}
             />
             {errors?.phone && <p className={s.error_message}>{errors?.phone?.message || "Error"}
             </p>
             }


             {/* Email Input */}
             <input type="email"
             placeholder="Email"
             className={`${s.input} ${classInput}`}
             {...register("email", {
                 
               required: "Email is required",
               pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 message: "Please enter a valid email"
               },
             })}
              />
             {errors?.email && <p className={s.error_message}>{errors?.email?.message || "Error"}
             </p>
             }    
        </label>
        {/* Button Send Message */}
        <button className={`${s.btn} ${classBtn}`} type="submit" disabled={!isValid}>
          {txtBtn}
        </button>
        </form>
)
}