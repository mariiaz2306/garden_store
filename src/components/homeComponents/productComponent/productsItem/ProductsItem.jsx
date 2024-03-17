import React from 'react'
import s from './ProductsItem.module.css'
import { Link } from 'react-router-dom'
import Price from '../../../../UI/price/Price'
import { BASE_URL } from '../../../../config'
import { useDispatch } from 'react-redux'

import shoppingBag1 from '../../../../media/icons/shoppingBag1.svg'

import { SlHandbag as CartIcon, SlHandbag, SlHeart } from 'react-icons/sl'
import { SlHeart as FavIcon } from 'react-icons/sl'
import shoppingBag from '../../../../media/icons/shoppingBag.svg'
import heart from '../../../../media/icons/heart.svg'
import BtnCart, { ButtonTypes } from '../../../../UI/btnCard/BtnCart'
import { useTheme } from '../../../../contexts/ThemeProvider'
import { TbShoppingBag } from 'react-icons/tb'
import { useSelector } from 'react-redux'

export default function ProductItem({ el }) {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)
  const handleAddToCart = (e) => {
    e.preventDefault()
  }

  return (
    <div className={s.products_wrapper}>
      <Link to={`/products/${el.id}`} className={s.products_link}>
        <div className={s.image_container}>
          <img src={`${BASE_URL}${el.image}`} alt={el.title} className={s.products_img} />
          <div className={s.icons_wrapper}>
            <button
              className={s.icon_button}
              //  onClick={handleAddToCart}
            >
              <img src={shoppingBag1} alt="Add to cart" />
            </button>

            {/* Кнопка добавления в избранное */}
            <button
              className={s.icon_button}
              // onClick={handleAddToCart}
            >
              <img src={heart} alt="Add to favorites" />
            </button>
          </div>
        </div>
      </Link>

      <div className={s.add_btn} onClick={handleAddToCart}>
        <BtnCart type={ButtonTypes.ADD_TO_CART} />
      </div>

      <div className={s.products_information}>
        <h3 className={s.products_title}>{el.title}</h3>
        <Price el={el} realPriceClass={s.real_price} oldPriceClass={s.old_price} saleValueClass={s.sale_value} />
      </div>
    </div>
  )
}
