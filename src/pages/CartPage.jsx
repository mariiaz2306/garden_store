import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TitleBreadCrumps from "../UI/titleBreadCrumps/TitleBreadCrumps";
import s from "./NotFoundPage/NotFoundPage.module.css";
import CartOrder from "../components/CartComponents/CartOrder/CartOrder";
import { saveCartItems } from "../utils/cartLocalStorage";

export default function CartPage() {
    const basketCart = useSelector((state) => state.cart.products);
    //isCartEmpty мы будем использовать для общего контенера на странице если корзина пуста то показывать пустую страницу, 
    //пока только идея
    const isCartEmpty = basketCart.length === 0;
    const breadcrumbs = [{ label: "Bacl to all products", path: "/products" }];
    useEffect(() => {
        // здесь нужно создать сохранение данных о заказе
         saveCartItems(basketCart)
    }, [basketCart]);

    return(
        
        <section className={`container`}>
      
            <TitleBreadCrumps
                title=" Shopping Cart"
                breadcrumbs={breadcrumbs}
                classTitleContainer={s.title_container}
            />
            <CartOrder basketCart={basketCart}/>
      
        </section>
    )
}