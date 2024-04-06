import React from 'react'

<<<<<<< HEAD
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TitleBreadCrumps from "../UI/titleBreadCrumps/TitleBreadCrumps";
import s from "./NotFoundPage/NotFoundPage.module.css";
import CartOrder from "../components/CartComponents/CartOrder/CartOrder";
import { saveCartItems } from "../utils/cartLocalStorage";

import CartComponent from './../components/CartComponents/CartComponent/CartComponent';
=======
import s from './../components/NotFound/NotFound.module.css'
import TitleBreadCrumps from '../UI/titleBreadCrumps/TitleBreadCrumps'
import CartComponent from './../components/CartComponents/CartComponent/CartComponent'
>>>>>>> 43bc339 (adaptive pages)


export default function CartPage() {
  const breadcrumbs = [{ label: 'Back to all products', path: '/products' }]

  return (
    <section className={`container`}>
      <TitleBreadCrumps title=" Shopping Cart" breadcrumbs={breadcrumbs} classTitleContainer={s.title_container} />
       <CartComponent/>
    </section>
  )
}
