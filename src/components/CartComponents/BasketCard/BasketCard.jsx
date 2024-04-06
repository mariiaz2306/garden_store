import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, deleteProduct, decreaseProduct } from '../../../store/slices/cartSlice'
import { BASE_URL } from '../../../config'

import s from './BasketCard.module.scss'

export default function BasketCard({ id, quantity, title, image, price, discont_price, oldPrice }) {
  const imgLink = `${BASE_URL}${image}`

  const dispatch = useDispatch()

  // Подготовка объекта продукта для передачи в действия Redux
  const product = { id, title, image, price, quantity, discont_price }
  const truncatedTitle = title.length > 37 ? title.substring(0, 37) + '…' : title
  return (
    <div className={s.card}>
      <img src={imgLink} alt="productPhoto" />
      <div className={s.infoBlock}>
        <div className={s.topLevel}>
          <h1 className={s.header}>{truncatedTitle}</h1>
          <button onClick={() => dispatch(deleteProduct(id))} className={s.deleteButton}>
            &#x2715;
          </button>
        </div>
        <div className={s.priceBlock}>
          <div className={s.countButtonContainer}>
            <button className={s.countButton} onClick={() => dispatch(decreaseProduct(id))}>
              -
            </button>
            <p className={s.countValue}>{quantity}</p>
            <button className={s.countButton} onClick={() => dispatch(addProduct(product))}>
              +
            </button>
          </div>

          <div className={s.priceBlock}>
            <div className={s.countButtonContainer}>
              <button className={s.countButton} onClick={() => dispatch(decreaseProduct(id))}>
                -
              </button>
              <p className={s.countValue}>{quantity}</p>
              <button className={s.countButton} onClick={() => dispatch(addProduct(product))}>
                +
              </button>
            </div>

            <p className={s.newPrice}>{`$${price}`}</p>
            <p className={s.oldPrice}>{oldPrice || discont_price ? `$${oldPrice || discont_price}` : ''}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
