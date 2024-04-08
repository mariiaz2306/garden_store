import React from 'react'

import TitleBreadCrumps from '../UI/titleBreadCrumps/TitleBreadCrumps'
import s from '../components/NotFound/NotFound.module.css'
import CartComponent from './../components/CartComponents/CartComponent/CartComponent'


export default function CartPage() {
  const breadcrumbs = [{ label: 'Back to all products', path: '/products' }]

  return (
    <section className={`container`}>
      <TitleBreadCrumps title=" Shopping Cart" breadcrumbs={breadcrumbs} classTitleContainer={s.title_container} />
      <CartComponent />
    </section>
  )
}

