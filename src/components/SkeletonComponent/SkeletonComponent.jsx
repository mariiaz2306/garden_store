import React, { useEffect, useState } from 'react';
import styles from '../../components/SkeletonComponent/SkeletonComponent.module.css';

const SkeletonLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Имитация загрузки в течение 4 секунд

    // Функция для анимации поочередного появления точек
    const animateDots = () => {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots === '...' ? '' : prevDots + '.'));
      }, 1000); // Интервал между появлением каждой точки (1000 мс)

      return () => clearInterval(interval);
    };

    animateDots(); // Запуск анимации точек

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles['skeleton-container']}>
        <h1>
          Products are loading
          {dots} {/* Отображение поочередных точек */}
        </h1>
        <div className={styles['skeleton-grid']}>
          {/* Создаем сетку из квадратов-ячеек */}
          {renderSkeletonSquares(9, styles['skeleton-square'])}
        </div>
      </div>
    );
  }

  // Если isLoading стал false, компонент возвращает null или другой контент
  return null;
};

// Функция для рендеринга квадратов скелетона
const renderSkeletonSquares = (count, className) => {
  const squares = [];
  for (let i = 0; i < count; i++) {
    squares.push(<div key={i} className={className}></div>);
  }
  return squares;
};

export default SkeletonLoader;







// import React from 'react';
// import { useFetchAllProductsQuery } from '../store/slices/apiSlice';
// import { useFiltration } from '../utils/useFiltration';
// import { useSelector } from 'react-redux';

// import ProductsItem from '../components/homeComponents/productComponent/productsItem/ProductsItem';
// import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
// import FiltrationBar from '../components/FiltrationBar/FiltrationBar';
// import SkeletonLoader from './../components/SkeletonComponent/SkeletonComponent';

// export default function ProductsPage() {
//   // Используем хук RTK Query для загрузки всех продуктов
//   const { data: productsData, isLoading, isError } = useFetchAllProductsQuery();

//   // Получаем настройки фильтрации из Redux Store
//   const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);

//   // Применяем фильтрацию к загруженным данным
//   const products = useFiltration(productsData, minPrice, maxPrice, sorted);

//   // Консоль лог для проверки состояния isLoading
//   console.log("isLoading:", isLoading);

//   if (isError) {
//     return <p>Error loading products.</p>; // Отображение ошибки, если запрос не удался
//   }

//   return (
//     <section className="container">
//       <BreadCrumbs /> 
//       <div className="grid">
//         <h2 className="grid__title">All products</h2>
//         <FiltrationBar showDiscountOption={true} /> 
//         {/* Показываем скелетон пока идет загрузка данных */}
//         {isLoading ? (
//           <SkeletonLoader /> // Компонент скелетона, отображается во время загрузки данных
//         ) : (
//           <ul className="grid__wrapper">
//             {/* Отображаем список продуктов после загрузки данных */}
//             {products.map((product) => (
//               <ProductsItem key={product.id} el={product} />
//             ))}
//           </ul>
//         )}
//       </div>
//     </section>
//   );
// }
