import { BASE_URL } from "../config";
import { loadCategoriesAction, loadNameOfCategoryAction, loadProductsAction } from './../store/actions/actions';



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


export const getDiscount = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/sale/send`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    if (response.ok) {
      alert("Your discount is 5%");
    } else {
      throw new Error("Failed to get discount");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchSalesProducts = async(dispatch)=>{
  try {
    const response = await fetch(`${BASE_URL}/products/all`);
    const data = await response.json();
    const newData = data
    .filter((el)=>el.discount_price !== null)
    .map((el)=>({...el,
      show_by_price: true,
      show_by_discount: true,
    }))
    dispatch(loadProductsAction(newData))
  
  }catch(error){
    console.error("Error fetching sales products:", error);
  }
}