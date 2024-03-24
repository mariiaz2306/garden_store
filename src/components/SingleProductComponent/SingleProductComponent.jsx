import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useFetchProductByIdQuery } from '../../store/slices/apiSlice.js'; // Импорт хука для получения данных о продукте
import { BASE_URL } from '../../config.js'; // Импорт базового URL

import s from './style.module.scss'; // Импорт стилей модуля
import heart from '../../media/icons/heart.svg'; // Импорт иконки сердца
import heartWhite from '../../media/icons/heartWhite.svg'

// Компонент для модального окна
const Modal = ({ src, alt, onClose }) => (
  // Объявление компонента модального окна
  <div className={s.modalBackdrop} onClick={onClose}>
    <img src={src} alt={alt} className={s.modalImage} /> {/* Изображение в модальном окне */}
  </div>
);

export default function SingleProductComponent() {
  // Функциональный компонент для отображения информации о продукте

  const { id } = useParams(); // Получение параметра id из URL

  // Деструктуризация данных о продукте из хука useFetchProductByIdQuery
  const { data: [product] = [], isLoading, isError } = useFetchProductByIdQuery(id);

  const { theme } = useSelector((state) => state.theme)

  // Состояния для управления модальным окном и количеством товаров
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Состояние для управления обрезанным описанием
  const [isTruncated, setIsTruncated] = useState(true);

  // Обрезанное описание продукта
  const truncatedDescription = `${product?.description.substring(0, 300)}...`;

  // Функция для переключения обрезанного описания
  const toggleTruncate = () => setIsTruncated(!isTruncated);

  // Вывод индикатора загрузки при загрузке данных о продукте
  if (isLoading) return <p>Loading...</p>;
  // Вывод сообщения об ошибке при ошибке загрузки данных или если продукт не найден
  if (isError || !product) return <p>Product not found or error loading the product.</p>;

  // Функции для управления количеством товаров в корзине
  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // Формирование ссылки на изображение продукта
  const imgLink = `${BASE_URL}${product.image}`;
  // Расчет скидки в процентах
  const discountPercent = product.discont_price ? ((product.price - product.discont_price) / product.price) * 100 : 0;

  // Функции для открытия и закрытия модального окна
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Возвращение JSX-разметки для отображения информации о продукте
  return (
    <>
      <div className={s.card}>
        {/* Блок с левой частью продукта */}
        <div className={s.leftBlock}>
          <img src={imgLink} alt="productImage" className={s.productImg} onClick={openModal} />
          {/* Отображение скидки на изображении продукта */}
          {product.discont_price && (
            <div className={s.discountOnImage}>
              <p className={s.discountText}>-{discountPercent.toFixed(0)}%</p>
            </div>
          )}
        </div>
        {/* Блок с заголовком и иконкой "Добавить в избранное" */}
        <div className={s.headerContainer}>
          <p className={s.header}>{product.title}</p>
          <img className={s.icon_button} src={theme === 'light' ? heart : heartWhite} alt="Add to favorites" />
        </div>
        {/* Блок с ценой и скидкой */}
        <div className={s.priceBlock}>
          <p className={s.priceP}>{product.discont_price ? `$${product.discont_price}` : `$${product.price}`}</p>
          {product.discont_price && <p className={s.oldPriceP}>{`$${product.price}`}</p>}
          {product.discont_price && (
            <div className={s.percentDiscount}>
              <p className={s.percentDiscountP}>-{discountPercent.toFixed(0)}%</p>
            </div>
          )}
        </div>
        {/* Блок с кнопками для управления количеством товаров */}
        <div className={s.buttonsContainer}>
          <div className={s.countButtonContainer}>
            <button className={s.countButton} onClick={decreaseCount}>-</button>
            <p className={s.countValue}>{count}</p>
            <button className={s.countButton} onClick={increaseCount}>+</button>
          </div>
          <button className={s.addToCartButton}>Add to Cart</button>
        </div>
        {/* Блок с описанием продукта */}
        <div className={s.descriptionBlock}>
          <p className={s.descriptionHeader}>Description</p>
          <p className={s.descriptionText}>{isTruncated ? truncatedDescription : product.description}</p>
          {/* Кнопка для переключения обрезанного описания */}
          {isTruncated && <a className='readMore' onClick={toggleTruncate}>Read more</a>}
        </div>
        {/* Модальное окно */}
        {isModalOpen && <Modal src={imgLink} alt={product.title} onClose={closeModal} />}
      </div>
    </>
  );
}
