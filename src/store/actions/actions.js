export const LOAD_CATEGORIES = "LOAD_CATEGORIES"
export const LOAD_NAME = "LOAD_NAME";



export const loadCategoriesAction = (payload)=>({
type: LOAD_CATEGORIES,
 payload,
})
export const loadNameOfCategoryAction = (payload) => ({
    type: LOAD_NAME,
    payload,
  });