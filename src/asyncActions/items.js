import {LINK } from "../config";
import { loadCategoriesAction, loadNameOfCategoryAction } from "../store/actions/actions";


export const fetchCategories = async (dispatch) => {
    try {
      const response = await fetch(`${LINK}/categories/all`);
      const data = await response.json();
      dispatch(loadCategoriesAction(data));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  export const fetchNameOfCategory = (element)=>{
    return (dispatch)=>{
        fetch(`${LINK}/categories/${element}`)
        .then(response => response.json())
        .then((json)=>{
            dispatch(loadNameOfCategoryAction(json.category))
        })
        .catch(error=>console.error("Error fetching categories:",error))
    }
  };