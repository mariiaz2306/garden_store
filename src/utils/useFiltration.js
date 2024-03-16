import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../store/slices/filterSlice";

export const useFiltration = (data, minPrice, maxPrice, sorted) => {
  const [products, setProducts] = useState(data); // Состояние для хранения отфильтрованных и отсортированных продуктов
  const { discounted } = useSelector((state) => state.filter); // Получаем значение фильтра скидок из хранилища Redux

  const dispatch = useDispatch(); // Получаем функцию диспетчера Redux

  useEffect(() => {
    // Сброс фильтров при монтировании компонента или изменении параметров фильтрации
    dispatch(resetFilter());
  }, [dispatch]);

  useEffect(() => {
    const filterProducts = () => {
      if (!data) return; // Если данных нет, ничего не делаем

      let filteredProducts = data.filter((product) => {
        // Фильтрация продуктов по минимальной и максимальной цене
        return (
          (!minPrice || product.price >= Number(minPrice)) &&
          (!maxPrice || product.price <= Number(maxPrice))
        );
      });

      // Применение фильтрации по скидке, если установлено соответствующее значение
      if (discounted) {
        filteredProducts = filteredProducts.filter(
          (product) => product.discount_price
        );
      }

      // Сортировка продуктов
      const sortedProducts =
        sorted === "" || sorted === "By default"
          ? filteredProducts // По умолчанию сортировка не применяется
          : sorted === "asc"
          ? [...filteredProducts].sort((a, b) => a.price - b.price) // По возрастанию цены
          : sorted === "desc"
          ? [...filteredProducts].sort((a, b) => b.price - a.price) // По убыванию цены
          : sorted === "nameAz"
          ? [...filteredProducts].sort((a, b) =>
              a.title.localeCompare(b.title)
            ) // По алфавиту, A-Z
          : sorted === "nameZa"
          ? [...filteredProducts].sort((a, b) =>
              b.title.localeCompare(a.title)
            ) // По алфавиту, Z-A
          : filteredProducts;

      setProducts(sortedProducts); // Обновляем состояние продуктов
    };

    // Установка таймера для задержки выполнения фильтрации (300 мс)
    const timerId = setTimeout(filterProducts, 300);

    // Очистка таймера перед каждым повторным рендером компонента
    return () => clearTimeout(timerId);
  }, [data, minPrice, maxPrice, sorted, discounted]); // Зависимости для повторного запуска эффекта при их изменении

  return products; // Возвращаем отфильтрованные и отсортированные продукты
};
