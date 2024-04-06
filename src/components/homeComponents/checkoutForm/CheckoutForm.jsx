import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import s from '../checkoutForm/CheckoutForm.module.css'
import { addSale } from '../../../utils/sale'
import DiscountModal from '../ModalWindow/ModalWindow'

export default function CheckoutForm({ classInput, classBtn, txtBtn, handleDiscountSubmit}) {
  const [resp, setResp] = useState({})
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' })

  const submit = (new_product_obj) => {
    reset()
    addSale(new_product_obj, setResp)
    handleDiscountSubmit()
    setShowModal(true)
  }

  return (
    <form className={s.form_container} onSubmit={handleSubmit(submit)}>
     <label className={s.input_container}>
        <input
          {...register("name", {
            required: "File is required!",
          })}
          type="text"
          placeholder="Name"
          className={`${classInput} ${s.input}`}
        />
        {errors?.name && (
          <p className={s.error_message}>{errors.name?.message}</p>
        )}

        <input
          {...register("phone", {
            required: "File is required!",
            minLength: { value: 13, message: "Minimum number length 13" },
            maxLength: { value: 13, message: "Maximum number length 13" },
          })}
          type="tel"
          placeholder="Phone number"
          className={`${classInput} ${s.input}`}
        />
        {errors?.phone && (
          <p className={s.error_message}>{errors.phone?.message}</p>
        )}

        <input
          {...register("email", {
            required: "File is required!",
          })}
          type="email"
          placeholder="Email"
          className={`${classInput} ${s.input}`}
        />
        {errors?.email && (
          <p className={s.error_message}>{errors.email?.message}</p>
        )}
      </label>
      <button className={`${classBtn} ${s.btn}`} >
        {txtBtn}
      </button>
    </form>
  )
}
