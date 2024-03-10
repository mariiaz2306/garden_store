import { BASE_URL } from "../config";
import { loadCategoriesAction, loadNameOfCategoryAction } from './../store/actions/actions';


export const fetchCategories = () => { 
  return async (dispatch) => { 
    try { 
      const response = await fetch(`${BASE_URL}/categories/all`); 
      const data = await response.json(); 
      dispatch(loadCategoriesAction(data)); 
    } catch (error) { 
      console.error("Error fetching categories:", error); 
    } 
  }; 
}

export const fetchNameOfCategory = (element) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/categories/${element}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadNameOfCategoryAction(json.category)))
      .catch((error) => {
        console.error("Error fetching name of category:", error);
      });
  };
};