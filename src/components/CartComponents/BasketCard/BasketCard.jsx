import React, { useState, useEffect } from 'react'
import s from './BasketCard.module.css'
import { useDispatch } from 'react-redux'
import { addProduct, deleteProduct, decreaseProduct } from '../../../store/slices/cartSlice'
import { BASE_URL } from '../../../config'
import { Link } from 'react-router-dom'

export default function BasketCard({ id, quantity, title, image, price, discont_price, oldPrice }) {
  const imgLink = `${BASE_URL}${image}`
  const dispatch = useDispatch()

  // Подготовка объекта продукта для передачи в действия Redux
  const product = { id, title, image, price, quantity, discont_price }
  const [truncatedTitle, setTruncatedTitle] = useState(title)

  useEffect(() => {
    // функция для укорачивания title в зависимости от размера экрана
    const handleResize = () => {
      const newTitle =
        window.innerWidth <= 480
          ? title.length > 10
            ? title.substring(0, 10) + '…'
            : title
          : title.length > 30
          ? title.substring(0, 30) + '…'
          : title
      setTruncatedTitle(newTitle)
    }

    // Вызов функции при первой загрузке компонента
    handleResize()

    // Добавление слушателя события при изменении размера окна
    window.addEventListener('resize', handleResize)

    // Удаление слушателя события при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize)
  }, [title]) // Зависимость от title гарантирует, что useEffect сработает при изменении title

  return (
    <div className={s.card}>
      <img className={s.img} src={imgLink} alt="productPhoto" />
      <div className={s.infoBlock}>
        <div className={s.topLevel}>
          <Link to={`/products/${id}`}>
            <h1 className={s.header}>{truncatedTitle}</h1>
          </Link>
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
          <div className={s.prices}>
            <p className={s.newPrice}>{`$${price}`}</p>
            <p className={s.oldPrice}>{oldPrice || discont_price ? `$${oldPrice || discont_price}` : ''}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
