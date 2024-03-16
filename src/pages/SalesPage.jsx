import React from "react";

import { useSelector } from "react-redux";

import { useFiltration } from "../utils/useFiltration";
import { useFetchAllProductsQuery } from "../store/slices/apiSlice";

import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import FiltrationBar from "../components/FiltrationBar/FiltrationBar";
import ProductItem from "../components/homeComponents/productComponent/productsItem/ProductsItem";

export default function SalesPage() {
  // Используем хук useFetchAllProductsQuery для получения всех продуктов
  const { data, isLoading, isError } = useFetchAllProductsQuery();

  // Получаем значения фильтров из Redux хранилища
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);

  // Фильтруем только продукты со скидкой
  const discountedProducts = data.filter((product) => product.discount_price);

  // Используем утилиту useFiltration для фильтрации скидочных продуктов по заданным критериям
  const products = useFiltration(
    discountedProducts,
    minPrice,
    maxPrice,
    sorted
  );

  // Если данные еще загружаются, отображаем сообщение "Loading..."
  if (isLoading) return <div>Loading...</div>;
  // Если произошла ошибка при загрузке данных, отображаем сообщение об ошибке
  if (isError) return <div>Error loading category.</div>;

  // Если данные успешно загружены, отображаем страницу с продуктами со скидкой
  return (
      <section className="container">
        {/* Отображаем хлебные крошки */}
        <BreadCrumbs />
        <div className="grid">
          {/* Отображаем заголовок страницы */}
          <h2 className="grid__title">Discounted items</h2>
          {/* Отображаем панель фильтрации, не показывая опцию скидки */}
          <FiltrationBar showDiscountOption={false} />
          {/* Отображаем список продуктов со скидкой */}
          <ul className="grid__wrapper">
            {/* Маппим продукты и отображаем каждый продукт */}
            {products &&
              products.map((product) => (
                <ProductItem key={product.id} el={product} />
              ))}
          </ul>
        </div>
      </section>
  );
}
