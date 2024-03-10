import React from 'react'
import s from "./CategoryItem.scss"
import { LINK } from '../../../config'
import {Link} from "react-router-dom"
export default function CategoryItem({ id, title, image }) {
    return (
      <div className={s.cart}>
        <Link to={`/categories/${id}`} className={s.category_link}>
          <img
            src={`${LINK}/${image}`}
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