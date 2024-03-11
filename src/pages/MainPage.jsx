import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "./../components/CategoriesComponents/categoryContainer/CategoryContainer";
import DiscountForm from "./../components/homeComponents/discountForm/DiscountForm";
import { fetchCategories, fetchSalesProducts } from "../asyncActions/items";
import { useTheme } from "../contexts/ThemeProvider";
import Banner from "../components/Banner/Banner";
import ProductContainer from "../components/homeComponents/productComponent/productContainer/ProductContainer";


export default function MainPage() {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchSalesProducts);
  }, [dispatch]);
  const categories_state = useSelector((state) => state.categories);

  const categories = categories_state.filter(({ id }) => id <= 4);

  const salesProducts = useSelector((state) => state.productsWithDiscount);

  const getRandom = ()=>{
    Math.round(Math.random() * (salesProducts.length - 1))
  }

  const randomState = salesProducts
  .map((el)=>({...el, random: getRandom()}))
  .sort((a,b)=>a.random - b.random)
  .filter((el, i)=>i < 4)




  return (
    <div className={`main_page ${theme}`}>
      <Banner />
      <div className="container">
      <CategoryContainer categories={categories} />
      <DiscountForm />
      <ProductContainer products={randomState} />
      </div>
    </div>
  );
}
