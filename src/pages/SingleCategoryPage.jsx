
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchCategoryByNameQuery } from '../store/slices/apiSlice';
import BreadCrumbs from './../components/BreadCrumbs/BreadCrumbs';
import FiltrationBar from './../components/FiltrationBar/FiltrationBar';
import { useDispatch, useSelector } from 'react-redux';
import { useFiltration } from '../utils/useFiltration';
import ProductItem from '../components/homeComponents/productComponent/productsItem/ProductsItem';
import { resetFilter } from '../store/slices/filterSlice';

const SingleCategoryPage = () => {
  const { id} = useParams();
  const { data: category, isLoading, isError } = useFetchCategoryByNameQuery(id);
  console.log(category);

  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    // Сброс фильтров при загрузке новой страницы или перезагрузке текущей страницы
    dispatch(resetFilter());
  }, [dispatch]);

  const products = useFiltration(category?.data, minPrice, maxPrice, sorted);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading category.</div>;

  return (
    <section className='container'>
      <BreadCrumbs />
      <div className='grid'>
        <h2 className='grid__title'>{category.category.title}</h2>
        <FiltrationBar />
        <ul className='grid__wrapper'>
        {products && products.map(product => (
            <ProductItem key={product.id} el={product} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleCategoryPage;
