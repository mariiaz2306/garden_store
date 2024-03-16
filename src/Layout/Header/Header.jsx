import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { SlHandbag as CartIcon } from "react-icons/sl";
import { SlHeart as FavIcon } from "react-icons/sl";
import logo from "./media/logo.svg";
import dayToggle from "./media/modeDay.svg";
import nightToggle from "./media/modeNight.svg";
import { useTheme } from "../../contexts/ThemeProvider";
import DiscountButton from "../../components/DiscountButton/DiscountButton";
import "../../style/app.scss";
import BurgerMenu from "./../../components/BurgerMenu/BurgerMenu";

const Header = () => {
  const { theme, handleThemeToggle } = useTheme();
  const location = useLocation(); // Получаем текущий URL

  function handleMenuToggle() {
    console.log("menu item clicked");
  }

  const handleDiscountButtonClick = () => {
    console.log("DiscountButton clicked");
  };

  const [isOpen, setIsOpen] = useState(); //используем useState для открытого и закрытого состояния бургер-меню

  const closeMenu = () => { 
    setIsOpen(false);
  }; // автоматическое закрытие бургер-меню при нажатии на категорию

  const activeLink =
    "header__navigation__ul-nav-link header__navigation__ul-nav-link-active";
  const normalLink = "header__navigation__ul-nav-link"; // константы для добавления активного и неактивного класса навигации

  const getLinkClass = (path) => {
    return location.pathname === path ? activeLink : normalLink;
  }; // функциия для активной вкладки

  return (
    <div className="wrapper">
      <header className={`header ${theme} container`}>
        <div className="header__logo-section">
          <NavLink to="/">
            <img className="header__logo-section-logo" src={logo} alt="Logo" />
          </NavLink>
          <img
            src={theme === "light" ? dayToggle : nightToggle}
            alt="Theme"
            className="header__logo-section__btnChangeTheme"
            onClick={handleThemeToggle}
          />
        </div>
        <nav className={`header__navigation ${theme} ${isOpen ? "active" : ""}`}>
          <DiscountButton
            className="discount-button"
            onClick={handleDiscountButtonClick}
          />
          <ul className={`header__navigation__ul ${theme}`}>
            <li className="header__navigation__ul-item">
              <NavLink
                to="/"
                className={`${getLinkClass("/")} ${theme}`}
                onClick={closeMenu}
              >
                Main Page
              </NavLink>
            </li>
            <li className="header__navigation__ul-item">
              <NavLink
                to="/categories"
                className={`${getLinkClass("/categories")} ${theme}`}
                onClick={closeMenu}
              >
                Categories
              </NavLink>
            </li>
            <li className="header__navigation__ul-item">
              <NavLink
                to="/products"
                className={`${getLinkClass("/products")} ${theme}`}
                onClick={closeMenu}
              >
                All products
              </NavLink>
            </li>
            <li className="header__navigation__ul-item">
              <NavLink
                to="/sales"
                className={`${getLinkClass("/sales")} ${theme}`}
                onClick={closeMenu}
              >
                All sales
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header__action__ul">
          <li className="header__action__ul-item">
            <NavLink
              to="/favorites"
              className={`header__action__ul-item icon ${theme}`}
            >
              <FavIcon />
            </NavLink>
          </li>
          <li className="header__action__ul-item">
            <NavLink
              to="/cart"
              className={`header__action__ul-item icon ${theme}`}
            >
              <CartIcon />
            </NavLink>
          </li>
          <li className="header__action__ul-item">
              <BurgerMenu theme={theme} isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
