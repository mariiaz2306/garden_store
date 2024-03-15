import React from "react";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import FiltrationBar from "../components/FiltrationBar/FiltrationBar";
import ProductItem from "../components/homeComponents/productComponent/productsItem/ProductsItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFiltration } from "../utils/useFiltration";
import { useSelector } from "react-redux";
import { useFetchAllProductsQuery } from "../store/slices/apiSlice";
import { resetFilter } from "../store/slices/filterSlice";

export default function SalesPage() {
  const { data, isLoading, isError } = useFetchAllProductsQuery();
  console.log(data);

  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);
  const discountedProducts = data.filter((product) => product.discont_price);
  const products = useFiltration(
    discountedProducts,
    minPrice,
    maxPrice,
    sorted
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Сброс фильтров при загрузке новой страницы или перезагрузке текущей страницы
    dispatch(resetFilter());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading category.</div>;
  return (
    <>
      <section className="container">
        <BreadCrumbs />
        <div className="grid">
          <h2 className="grid__title">Discounted items</h2>
          <FiltrationBar showDiscountOption={true} />
          <ul className="grid__wrapper">
            {products &&
              products.map((product) => (
                <ProductItem key={product.id} el={product} />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
