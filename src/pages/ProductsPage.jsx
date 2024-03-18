
// import React from "react";

// import { useSelector } from "react-redux";

// import { useFiltration } from "../utils/useFiltration";
// import { useFetchAllProductsQuery } from "../store/slices/apiSlice";

// import BreadCrumbs from "./../components/BreadCrumbs/BreadCrumbs";
// import FiltrationBar from "../components/FiltrationBar/FiltrationBar";
// import ProductItem from "../components/homeComponents/productComponent/productsItem/ProductsItem";

// export default function ProductsPage() {
//   // Получаем данные всех продуктов
//   const { data, isLoading, isError } = useFetchAllProductsQuery();

//   // Получаем значения фильтров из хранилища Redux
//   const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);

//   // Фильтруем продукты с помощью утилиты useFiltration
//   const products = useFiltration(data, minPrice, maxPrice, sorted);

//   // Если данные еще загружаются, отображаем сообщение "Loading..."
//   if (isLoading) return <div>Loading...</div>;
//   // Если произошла ошибка при загрузке данных, отображаем сообщение об ошибке
//   if (isError) return <div>Error loading category.</div>;

//   // Если данные успешно загружены, отображаем страницу со всеми продуктами
//   return (
//     <section className="container">
//       {/* Отображаем хлебные крошки */}
//       <BreadCrumbs />
//       <div className="grid">
//         {/* Отображаем заголовок страницы */}
//         <h2 className="grid__title">All products</h2>
//         {/* Отображаем панель фильтрации */}
//         <FiltrationBar showDiscountOption={true} />
//         {/* Отображаем список продуктов */}
//         <ul className="grid__wrapper">
//           {/* Маппим продукты и отображаем каждый продукт */}
//           {products &&
//             products.map((product) => (
//               <ProductItem key={product.id} el={product} />
//             ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

