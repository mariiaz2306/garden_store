import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { SlHandbag as CartIcon } from "react-icons/sl";
import { SlHeart as FavIcon } from "react-icons/sl";
import { RxHamburgerMenu as MenuIcon } from "react-icons/rx";
import logo from "./media/logo.svg";
import dayToggle from "./media/modeDay.svg";
import nightToggle from "./media/modeNight.svg";
import { useTheme } from "../../contexts/ThemeProvider";
import DiscountButton from "../../components/DiscountButton/DiscountButton";
import "../../style/app.scss";

const Header = () => {
  const { theme, handleThemeToggle } = useTheme(); // Используем useTheme для получения значения темы и функции смены темы
  function handleMenuToggle() {
    console.log("menu item clicked");
  }
 const handleDiscountButtonClick = () => {
    console.log("DiscountButton clicked");
 };
  return (
    <header className={`header ${theme}`}>
      <div className="header__logo-section">
        <img className="header__logo-section-logo" src={logo} alt="Logo" />
        <img
          src={theme === "light" ? dayToggle : nightToggle}
          alt="Theme"
          className="header__logo-section__btnChangeTheme"
          onClick={handleThemeToggle}
        />
      </div>

      <nav className="header__navigation">
        <DiscountButton onClick={handleDiscountButtonClick} />
        <ul className={`header__navigation__ul ${theme}`}>
          <li className="header__navigation__ul-item">
            <NavLink
              to="/"
              className={`header__navigation__ul-nav-link ${theme}`}
            >
              Main Page
            </NavLink>
          </li>

          <li className="header__navigation__ul-item">
            <NavLink
              to="/categories"
              className={`header__navigation__ul-nav-link ${theme}`}
            >
              Categories
            </NavLink>
          </li>
          <li className="header__navigation__ul-item">
            <NavLink
              to="/products"
              className={`header__navigation__ul-nav-link ${theme}`}
            >
              All products
            </NavLink>
          </li>
          <li className="header__navigation__ul-item">
            <NavLink
              to="/sales"
              className={`header__navigation__ul-nav-link ${theme}`}
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
          <button
            className={`header__action__ul-item icon menu  ${theme}`}
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
