import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/app.scss'
import { Provider } from 'react-redux';
import  {store} from './store/store';
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import MainPage from "./pages/MainPage";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage"
import SalesPage from './pages/SalesPage/SalesPage';
import ErrorPage from './pages/ErrorPage';
import SingleCategoryPage from './pages/SingleCategoryPage';



const router = createBrowserRouter([
  {
    path: "/", // домашняя страница
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/:id",

        element: <SingleCategoryPage />,

      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",

        element: <SingleProductPage />,

        // element: <SingleProductPage />,

      },
      {
        path: "/sales",
        element: <SalesPage />,
      },
      {
        path: "/cart",
        // element: <CartPage />,
      },
      {
        path: "/favorites",
        // element: <FavoritesPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </PersistGate>
  </Provider>
);
