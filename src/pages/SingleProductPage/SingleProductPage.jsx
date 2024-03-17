import React, { useState } from "react";
import { useParams } from "react-router-dom";
import s from "./style.module.scss";
import { useFetchProductByIdQuery } from "../../store/slices/apiSlice";
import { BASE_URL } from "../../../src/config.js";

// Компонент для модального окна
const Modal = ({ src, alt, onClose }) => (
  <div className={s.modalBackdrop} onClick={onClose}>
    <img src={src} alt={alt} className={s.modalImage} />
  </div>
);

export default function SingleProductPage() {
  const { id } = useParams();
 
  const {
    data: [product] = [],
    isLoading,
    isError,
  } = useFetchProductByIdQuery(id);

  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для управления модальным окном
  const [count, setCount] = useState(0);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !product)
    return <p>Product not found or error loading the product.</p>;

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const imgLink = `${BASE_URL}${product.image}`;
  const discountPercent = product.discont_price
    ? ((product.price - product.discont_price) / product.price) * 100
    : 0;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={s.card}>
      <div className={s.leftBlock}>
        <img
          src={imgLink}
          alt="productImage"
          className={s.productImg}
          onClick={openModal}
        />
      </div>
      <div className={s.rightBlock}>
        <p className={s.header}>{product.title}</p>
        <div className={s.priceBlock}>
          <p className={s.priceP}>
            {product.discont_price
              ? `${product.discont_price} $`
              : `${product.price} $`}
          </p>
          {product.discont_price && (
            <p className={s.oldPriceP}>{`${product.price} $`}</p>
          )}
          {product.discont_price && (
            <p className={s.percentDiscountP}>-{discountPercent.toFixed(0)}%</p>
          )}
        </div>
        <div className={s.buttonsContainer}>
          <div className={s.countButtonContainer}>
            <button className={s.countButton} onClick={decreaseCount}>
              -
            </button>
            <p className={s.countValue}>{count}</p>
            <button className={s.countButton} onClick={increaseCount}>
              +
            </button>
          </div>
          <button className={s.addToCartButton}>add to Cart</button>
        </div>
        <div className={s.descriptionBlock}>
          <p className={s.descriptionHeader}>Description</p>
          <p className={s.descriptionText}>{product.description}</p>
        </div>
      </div>
      {isModalOpen && (
        <Modal src={imgLink} alt={product.title} onClose={closeModal} />
      )}
    </div>
  );
}
