import React from "react";
import s from "./CategoryContainer.module.css";
import CategoryItem from "../categoryItem/CategoryItem";
import { useFetchCategoriesQuery } from "../../../store/slices/apiSlice"; 

const CategoryContainer = () => {
  const { data: categories, isLoading, error } = useFetchCategoriesQuery();

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  // Проверяем, что categories действительно содержит данные
  if (!categories) return <p>No categories to display</p>;

  // Ограничиваем количество отображаемых категорий до первых четырех
  const displayedCategories = categories.slice(0, 4);

  return (
    <div className={s.categories_container}>
      {displayedCategories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
