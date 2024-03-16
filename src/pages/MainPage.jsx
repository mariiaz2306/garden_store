import React from "react";

import { useTheme } from "../contexts/ThemeProvider";

import CategoryContainer from "./../components/CategoriesComponents/categoryContainer/CategoryContainer";
import DiscountForm from "./../components/homeComponents/discountForm/DiscountForm";
import ProductContainer from "./../components/homeComponents/productComponent/productContainer/ProductContainer";
import Banner from "../components/Banner/Banner";

export default function MainPage() {
  const { theme } = useTheme();

  // Теперь не требуется dispatching thunk actions, так как мы используем RTK Query hooks непосредственно в компонентах

  return (
    <div className={`main_page ${theme}`}>
      <Banner />
      <div className="container">
        <CategoryContainer />
        <DiscountForm />
        <ProductContainer />
      </div>
    </div>
  );
}
