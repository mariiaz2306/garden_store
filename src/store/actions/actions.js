export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_NAME = 'LOAD_NAME';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const PRODUCTS_WITH_DISCOUNT_ALL = 'PRODUCTS_WITH_DISCOUNT_ALL';

export const loadCategoriesAction = (payload) => ({
  type: LOAD_CATEGORIES,
  payload,
});

export const loadNameOfCategoryAction = (payload) => ({
  type: LOAD_NAME,
  payload,
});

export const loadProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
})

export const productsWithDiscountAllAction = (payload) => ({
  type: PRODUCTS_WITH_DISCOUNT_ALL,
  payload,
})