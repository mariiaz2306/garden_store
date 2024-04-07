import React from 'react'
import './burgerMenu.scss' // Импорт стилей

const BurgerMenu = ({ isActive, onClick, theme }) => {
  return (
    <button
      onClick={() => onClick()} // Обработчик клика на кнопку
      className={`header__menu ${theme} ${isActive === true ? 'active' : ''} ${isActive === false ? 'unactive' : ''}`} // Динамическое добавление классов в зависимости от состояния isActive и theme
    >
      <span></span> {/* Иконка бургер-меню */}
    </button>
  )
}

export default BurgerMenu // Экспорт компонента
