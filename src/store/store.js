import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer, categoryReducer } from "./reducers/categoryReducer";


const rootReducer = combineReducers({
  categories: categoriesReducer,
  nameOfCategory: categoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));





