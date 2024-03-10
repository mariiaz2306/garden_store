import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import CategoryContainer from "../../components/CategoriesComponents/categoryContainer/CategoryContainer";
import { fetchCategories } from '../../asyncActions/items';
import DiscountForm from './../../components/homeComponents/discountForm/DiscountForm';





export default function MainPage(){
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(fetchCategories)
    }, [])
    const categories_state = useSelector((state) => state.categories);
    const categories = categories_state.filter(({id})=>id <= 4)








    return(
      <div className='main_container'>
        <CategoryContainer categories={categories}/>
        <DiscountForm/>
      
        
      </div>  
    )
}