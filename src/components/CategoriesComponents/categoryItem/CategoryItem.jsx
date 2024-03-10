import React from 'react'
import s from "./CategoryItem.scss"
import {BASE_URL } from '../../../config'
import {Link} from "react-router-dom"
export default function CategoryItem({ id, title, image }) {
    return (
      <div className={s.cart}>
        <Link to={`/categories/${id}`} className={s.category_link}>
          <img
            src={`${BASE_URL}/${image}`}
            alt={title}
            className={s.category_image}
          />
          <div className={s.text_container}>
            <p>{title}</p>
          </div>
        </Link>
      </div>
    );
  }