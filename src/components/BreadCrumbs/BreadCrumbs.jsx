import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./BreadCrumbs.scss"; // Импорт стилей

const BreadCrumbs = () => {
  const location = useLocation(); // Получение текущего URL

  let currentLink = ""; // Инициализация текущей ссылки
  const crumbs = location.pathname // Получение массива крошек из URL
    .split("/")
    .filter((crumb) => crumb !== "") // Фильтрация пустых элементов
    .map((crumb) => {
      currentLink += `/${crumb}`; // Добавление к текущей ссылке новой крошки

      let displayName; // Название крошки для отображения
      const isActive = location.pathname === currentLink; // Проверка активности крошки

      // Специальные названия для определенных путей
      switch (currentLink) {
        case "/categories":
          displayName = "Categories";
          break;
        case "/categories/1":
          displayName = "Annuals";
          break;
        case "/categories/2":
          displayName = "Nursery";
          break;
        // Другие специальные названия для продуктов и страницы "All sales"
        case "/sales":
          displayName = "All sales";
          break;
        default:
          displayName = crumb; // Если специальное название не задано, используем текущий крошку
      }

      // Возвращаем элемент списка с ссылкой на соответствующий URL
      return (
        <div className="breadcrumbs__item" key={crumb}>
          <Link to={currentLink} className={isActive ? "active" : ""}>
            {displayName}
          </Link>
        </div>
      );
    });

  // Возвращаем навигационное меню с хлебными крошками
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/">Main page</Link> {/* Ссылка на главную страницу */}
        </li>
        {crumbs} {/* Отображаем список крошек */}
      </ul>
    </nav>
  );
};

export default BreadCrumbs; // Экспорт компонента
