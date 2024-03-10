import { LOAD_CATEGORIES, LOAD_NAME} from "../actions/actions";

export const categoriesReducer = (state= [], action) =>{
    if(action.type === LOAD_CATEGORIES){
      return action.payload
    } return state
  }

export const categoryReducer = (state = [], action) =>
  action.type === LOAD_NAME ? action.payload : state;