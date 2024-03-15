import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./BreadCrumbs.scss";

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      let displayName;
      const isActive = location.pathname === currentLink;

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
        case "/categories/3":
          displayName = "Garden Art";
          break;
        case "/categories/4":
          displayName = "Plant Care";
          break;
        case "/categories/5":
          displayName = "Seasonal";
          break;
        case "/products":
          displayName = "All Products";
          break;
        case "/sales":
          displayName = "All Sales";
          break;
        default:
          displayName = crumb; // Если специальное название не задано, используем текущий crumb
      }

      return (
        <div className="breadcrumbs__item" key={crumb}>
          <Link to={currentLink} className={isActive ? "active" : ""}>
            {displayName}
          </Link>
        </div>
      );
    });

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/">Main page</Link>
        </li>
        {crumbs}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
