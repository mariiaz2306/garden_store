import React from 'react'
import { Link } from 'react-router-dom'

import './Banner.scss'

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__content__header">Amazing Discounts on Garden Products!</h1>
        <Link to="/sales">
          <button className="banner__content__checkOutBtn">Check out</button>
        </Link>
      </div>
    </div>
  )
}
