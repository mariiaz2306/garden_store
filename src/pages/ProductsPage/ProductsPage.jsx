import React from "react";
import ProductsItem from "../../components/homeComponents/productComponent/productsItem/ProductsItem";
import ProductCard from "../../components/ProductCard/ProductCard";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { useFetchAllProductsQuery } from "../../store/slices/apiSlice";

export default function ProductsPage() {
  const { data: products, isLoading, isError } = useFetchAllProductsQuery();
  console.log("products", products);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;

  return (
    // <section className={s.productsPage}>
    <section className="container">
      <h2 className={s.header}>All Products</h2>
      <div className={s.productsContainer}>
        {products?.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            {/* <ProductCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              discont_price={product.discont_price}
            /> */}
            <ProductsItem key={product.id} el={product} />
          </Link>
        ))}
      </div>
    </section>
  );
}
