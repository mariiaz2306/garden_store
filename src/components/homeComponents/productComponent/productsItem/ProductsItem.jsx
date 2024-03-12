import React from "react";
import s from "./ProductsItem.module.css"
import { Link } from "react-router-dom";
import Price from "../../../../UI/price/Price";
import { BASE_URL } from "../../../../config";

export default function ProductItem({el}){

    return (
        <div className={s.products_wrapper}>
          <Link to={`/product/${el.id}`} className={s.products_link}>
            <img
              src={`${BASE_URL}${el.image}`}
              alt={el.title}
              className={s.products_img}
            />
          </Link>

          <Price
          el={el}
          realPriceClass={s.real_price}
          oldPriceClass={s.old_price}
          saleValueClass={s.sale_value}
        />
      </div>
   )
}