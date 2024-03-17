import React from "react";

import { useSelector } from "react-redux";

import { useFiltration } from "../utils/useFiltration";
import { useFetchAllProductsQuery } from "../store/slices/apiSlice";

import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import FiltrationBar from "../components/FiltrationBar/FiltrationBar";
import ProductItem from "../components/homeComponents/productComponent/productsItem/ProductsItem";

export default function SalesPage() {
  // Запрос на получение всех продуктов
  const { data, isLoading, isError } = useFetchAllProductsQuery();

  // Получение фильтров из Redux хранилища
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);

  // Фильтрация продуктов с учетом скидок
  const discountedProducts = data.filter((product) => product.discont_price);

  // Применение фильтров к отфильтрованным продуктам
  const products = useFiltration(
    discountedProducts,
    minPrice,
    maxPrice,
    sorted
  );

  // Вывод сообщения о загрузке, если данные загружаются
  if (isLoading) return <div>Loading...</div>;

  // Вывод сообщения об ошибке, если возникла ошибка при загрузке данных
  if (isError) return <div>Error loading category.</div>;

  // Возвращение разметки страницы
  return (
    <section className="container">
      <BreadCrumbs /> {/* Компонент хлебных крошек */}
      <div className="grid">
        <h2 className="grid__title">Discounted items</h2> {/* Заголовок раздела */}
        <FiltrationBar showDiscountOption={false} /> {/* Компонент панели фильтрации (без опции скидки) */}
        <ul className="grid__wrapper">
          {/* Вывод отфильтрованных продуктов */}
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} el={product} />
            ))}
        </ul>
      </div>
    </section>
  );
}


