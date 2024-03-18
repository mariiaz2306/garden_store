import React from 'react'
import SingleProductPage from '../components/SingleProductPage/SingleProductPage'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'

const SingleProduct = () => {
  return (
    <section className="container">
      <BreadCrumbs />
      <SingleProductPage />
    </section>
  )
}

export default SingleProduct
