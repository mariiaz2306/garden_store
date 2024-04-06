import React from 'react'
import { useFetchAllProductsQuery } from '../store/slices/apiSlice'
import { useFiltration } from '../utils/useFiltration'
import { useSelector } from 'react-redux'

import ProductsItem from '../components/homeComponents/productComponent/productsItem/ProductsItem'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import FiltrationBar from '../components/FiltrationBar/FiltrationBar'

export default function ProductsPage() {
  const { data, isLoading, isError } = useFetchAllProductsQuery()
  console.log('products', data)

  // Получаем значения фильтров из хранилища Redux
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter)

  // Фильтруем продукты с помощью утилиты useFiltration
  const products = useFiltration(data, minPrice, maxPrice, sorted)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading products.</p>

  return (
    // <section className={s.productsPage}>
    <section className="container">
      {/* Отображаем хлебные крошки */}
      <BreadCrumbs />
      <div className="grid">
        {/* Отображаем заголовок страницы */}
        <h2 className="grid__title">All products</h2>
        {/* Отображаем панель фильтрации */}
        <FiltrationBar showDiscountOption={true} />
        {/* Отображаем список продуктов */}
        <ul className="grid__wrapper">
          {products?.map((product) => (
            <ProductsItem key={product.id} el={product} />
          ))}
        </ul>
      </div>
    </section>
  )
}
