import React from "react";

import { useSelector } from "react-redux";

import { useFiltration } from "../utils/useFiltration";
import { useFetchAllProductsQuery } from "../store/slices/apiSlice";

import BreadCrumbs from "./../components/BreadCrumbs/BreadCrumbs";
import FiltrationBar from "../components/FiltrationBar/FiltrationBar";
import ProductItem from "../components/homeComponents/productComponent/productsItem/ProductsItem";

export default function ProductsPage() {
  const { data, isLoading, isError } = useFetchAllProductsQuery();
  console.log(data);

  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);

  const products = useFiltration(data, minPrice, maxPrice, sorted);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading category.</div>;

  return (
      <section className="container">
        <BreadCrumbs />
        <div className="grid">
          <h2 className="grid__title">All products</h2>
          <FiltrationBar showDiscountOption={true} />
          <ul className="grid__wrapper">
            {products &&
              products.map((product) => (
                <ProductItem key={product.id} el={product} />
              ))}
          </ul>
        </div>
      </section>
  );
}
