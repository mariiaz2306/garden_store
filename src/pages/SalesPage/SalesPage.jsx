import React from "react";
import { useFetchAllProductsQuery } from "../../store/slices/apiSlice";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import ProductsItem from "../../components/homeComponents/productComponent/productsItem/ProductsItem";

export default function SalePage() {
  const { data: products, isLoading, isError } = useFetchAllProductsQuery();

  // Отфильтровываем продукты, чтобы оставить только те, у которых есть скидка
  const saleProducts =
    products?.filter((product) => product.discont_price !== null) || [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products.</p>;
  if (saleProducts.length === 0) return <p>No products on sale right now.</p>;

  return (
      <section className="container">
          <h2 className={s.header}>Products on Sale</h2>
          <div className={s.container}>
            {saleProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                  <ProductsItem key={product.id} el={product} />
              </Link>
            ))}
          </div>
      </section>
  );
}
