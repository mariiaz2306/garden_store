import React from "react";
import CategoryContainer from "./../components/CategoriesComponents/categoryContainer/CategoryContainer";
import DiscountForm from "./../components/homeComponents/discountForm/DiscountForm";
import ProductContainer from "./../components/homeComponents/productComponent/productContainer/ProductContainer";
import { useTheme } from "../contexts/ThemeProvider";
import Banner from "../components/Banner/Banner";
import TitleBreadCrumps from "../UI/titleBreadCrumps/TitleBreadCrumps";
import BreadcrumpsMain from '../UI/breadcrumpsMain/BreadcrumpsMain';

export default function MainPage() {
  const { theme } = useTheme();

  //the links to category and sales pages are added 

  const breadcrumbsCategories = [
    { label: "All categories", path: "/categories" },
  ];

  const breadcrumbsSales = [{ label: "All sales", path: "/sales" }];

  // Теперь не требуется dispatching thunk actions, так как мы используем RTK Query hooks непосредственно в компонентах

  return (
    <div className={`main_page ${theme}`}>
      <Banner />
      <div className="container">
        <TitleBreadCrumps
          title="Categories"
          breadcrumbs={breadcrumbsCategories}
          />

        <CategoryContainer />
        <DiscountForm />

        <TitleBreadCrumps title = "Sale" breadcrumbs={breadcrumbsSales}/>
        <ProductContainer />
      </div>
    </div>
  );
}
