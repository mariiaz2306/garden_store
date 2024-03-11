import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "./../components/CategoriesComponents/categoryContainer/CategoryContainer";
import DiscountForm from "./../components/homeComponents/discountForm/DiscountForm";
import { fetchCategories } from "../asyncActions/items";
import { useTheme } from "../contexts/ThemeProvider";
import Banner from "../components/Banner/Banner";


export default function MainPage() {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories_state = useSelector((state) => state.categories);
  console.log(categories_state);
  const categories = categories_state.filter(({ id }) => id <= 4);

  return (
    <div className={`main_page ${theme}`}>
      <Banner />
      <CategoryContainer categories={categories} />
      <DiscountForm />
    </div>
  );
}
