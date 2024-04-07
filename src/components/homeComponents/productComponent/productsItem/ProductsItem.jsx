import React from 'react'
import { Link } from 'react-router-dom'
import Price from '../../../../UI/price/Price'
import { BASE_URL } from '../../../../config'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addLikedProduct, removeLikedProduct } from '../../../../store/slices/likedProductsSlice'
import { addProduct, deleteProduct } from '../../../../store/slices/cartSlice'

import s from './ProductsItem.module.css'
import shoppingBag1 from '../../../../media/icons/shoppingBag1.svg'
import heart from '../../../../media/icons/heart.svg'
import BtnCart, { ButtonTypes } from '../../../../UI/btnCard/BtnCart'

export default function ProductItem({ el }) {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const handleAddToCart = (e) => {
    e.preventDefault()

    dispatch(addProduct({ ...el, quantity: 1 })) // Предполагаем, что el - это объект товара с нужными полями
  }

  const cartProducts = useSelector((state) => state.cart.products)
  const isProductInCart = cartProducts.some((product) => product.id === el.id)

  const handleToggleCart = () => {
    if (isProductInCart) {
      dispatch(deleteProduct(el.id)) // Удаляем товар из корзины
    } else {
      dispatch(addProduct({ ...el, quantity: 1 })) // Добавляем товар в корзину
    }
  }

  const likedProducts = useSelector((state) => state.likedProducts.likedProducts)
  const isLiked = likedProducts.some((likedProduct) => likedProduct.id === el.id)

  const toggleLiked = () => {
    if (isLiked) {
      dispatch(removeLikedProduct(el))
    } else {
      dispatch(addLikedProduct(el))
    }
  }

  return (
    <div className={s.products_wrapper}>
      <div className={s.image_container}>
        <Link to={`/products/${el.id}`} className={s.products_link}>
          <img src={`${BASE_URL}${el.image}`} alt={el.title} className={s.products_img} />
        </Link>
        <div className={s.icons_wrapper}>
          {/* Кнопка добавления в избранное */}
          <button className={s.icon_button} onClick={toggleLiked} isLiked={isLiked}>
            <img className={s.svgIcon} src={heart} alt="Add to favorites" />
          </button>

          <button className={s.icon_button} onClick={handleToggleCart}>
            <img src={shoppingBag1} alt="Add to cart" />
          </button>
        </div>
      </div>

      <div className={s.add_btn} onClick={handleAddToCart}>
        <BtnCart type={ButtonTypes.ADD_TO_CART} onClick={handleAddToCart} />
      </div>

      <div className={s.products_information}>
        <Link to={`/products/${el.id}`} className={s.products_link}>
          <h3 className={s.products_title}>{el.title}</h3>
        </Link>
        <Price
          el={el}
          theme={theme}
          realPriceClass={s.real_price}
          oldPriceClass={s.old_price}
          saleValueClass={s.sale_value}
        />
      </div>
    </div>
  )
}
