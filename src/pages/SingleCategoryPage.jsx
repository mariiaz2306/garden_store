import React from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useFetchCategoryByNameQuery } from '../store/slices/apiSlice'
import { useFiltration } from '../utils/useFiltration'

import BreadCrumbs from './../components/BreadCrumbs/BreadCrumbs'
import FiltrationBar from './../components/FiltrationBar/FiltrationBar'
import ProductItem from '../components/homeComponents/productComponent/productsItem/ProductsItem'

const SingleCategoryPage = () => {
  // Получаем параметр из URL
  const { id } = useParams()

  // Используем хук useFetchCategoryByNameQuery для получения данных категории
  const {
    data: category, // Данные о категории
    isLoading, // Флаг загрузки данных
    isError, // Флаг ошибки при загрузке данных
  } = useFetchCategoryByNameQuery(id)

  // Получаем значения фильтров из Redux хранилища
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter)

  // Используем утилиту useFiltration для фильтрации продуктов по заданным критериям
  const products = useFiltration(category?.data, minPrice, maxPrice, sorted)

  // Если данные еще загружаются, отображаем сообщение "Loading..."
  if (isLoading) return <div>Loading...</div>
  // Если произошла ошибка при загрузке данных, отображаем сообщение об ошибке
  if (isError) return <div>Error loading category.</div>

  // Если данные успешно загружены, отображаем страницу с категорией и продуктами
  return (
    <section className="container">
      {/* Отображаем хлебные крошки */}
      <BreadCrumbs />
      <div className="grid">
        {/* Отображаем заголовок категории */}
        <h2 className="grid__title">{category.category.title}</h2>
        {/* Отображаем панель фильтрации */}
        <FiltrationBar showDiscountOption={true} />
        {/* Отображаем список продуктов */}
        <ul className="grid__wrapper">
          {/* Маппим продукты и отображаем каждый продукт */}
          {products && products.map((product) => <ProductItem key={product.id} el={product} />)}
        </ul>
      </div>
    </section>
  )
}

export default SingleCategoryPage
