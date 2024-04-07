import React from 'react'
import { useFetchAllProductsQuery } from '../store/slices/apiSlice'
import { useFiltration } from '../utils/useFiltration'
import { useSelector } from 'react-redux'

import ProductsItem from '../components/homeComponents/productComponent/productsItem/ProductsItem'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import FiltrationBar from '../components/FiltrationBar/FiltrationBar'

export default function SalePage() {
  const { data, isLoading, isError } = useFetchAllProductsQuery()

  // Получение фильтров из Redux хранилища
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter)

  // Фильтрация продуктов с учетом скидок
  const discountedProducts = data?.filter((product) => product.discont_price) || []

  // Применение фильтров к отфильтрованным продуктам
  const products = useFiltration(discountedProducts, minPrice, maxPrice, sorted)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading products.</p>

  return (
    <section className="container">
      <BreadCrumbs /> {/* Компонент хлебных крошек */}
      <div className="grid">
        <h2 className="grid__title">Discounted items</h2> {/* Заголовок раздела */}
        <FiltrationBar showDiscountOption={false} /> {/* Компонент панели фильтрации (без опции скидки) */}
        <ul className="grid__wrapper">
          {/* Вывод отфильтрованных продуктов */}
          {products && products.map((product) => <ProductsItem key={product.id} el={product} />)}
        </ul>
      </div>
    </section>
  )
}
