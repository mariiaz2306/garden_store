import React, {useState} from "react";
import {useForm } from "react-hook-form";
import s from "../checkoutForm/CheckoutForm.module.css";
import { toast } from 'react-toastify';
import { addSale } from "../../../utils/sale"


export default function DiscountForm({classInput}) {

  const [resp, setResp] = useState({});

  const {register, handleSubmit, formState: { errors }, reset} = useForm({mode: "onBlur"});

  const submit = new_product_obj => {
    reset();
    console.log(new_product_obj);
    addSale(new_product_obj, setResp, toast.success('5% discount has been received!'));

  };


  // const numberRegexp = /^(?:\+491\d{10}|01\d{10})$/;

  const numberRegister = register('number', {
    required: '*Required field',
    pattern: {
      // value: numberRegexp,
      message: '*Not a valid number format'
    }
  });


    return (
        <form className={s.form_container} onSubmit={handleSubmit(submit)}> 
    
    
          <label className={s.input_container}>
             
               

                <p className={s.error_text}>{errors.name?.message}</p>
                <input
             type="text"
             placeholder="Name"
             {...register("name", {
               required: "Name is required",
            
             })}
             className={`${classInput} ${s.input}`}
             />

                

              
                <p className={s.error_text}>{errors.number?.message}</p>
                {
                  resp.status === 'OK' ?  <input
                  type="tel"
                  placeholder="Phone number"
                  className={`${classInput} ${s.input}`}
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
                                       : <input className={s.input} type="tel" name='number' placeholder='+49' {...numberRegister}/>
                }

                 <p className={s.error_text}>{errors.email?.message}</p>
                 <input type="email"
             placeholder="Email"
             className={`${classInput} ${s.input}`}
             {...register("email", {
                 
               required: "Email is required",
               pattern: {
                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 message: "Please enter a valid email"
               },
             })}
              />
              </label>

               

                <button className={s.getDiscount}>{resp.status === 'OK' ? 'Discount has been received' : 'Get a discount'}</button>

              </form>
   
     
    );
}