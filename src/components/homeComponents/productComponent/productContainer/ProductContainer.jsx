import React from "react";
import s from "./ProductContainer.module.css"
import ProductsItem from "../productsItem/ProductsItem";

export default function ProductContainer({products}){
    return (
       
        <div className={s.products_container}>
            {products
            .filter((el)=>el.show_by_discount && el.show_by_price)
            .map((item)=>{
                return (
                    <ProductsItem key={item.id} el={item}/>
                )
            })}

        </div>
    )
}