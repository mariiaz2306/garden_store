import { LOAD_PRODUCTS, PRODUCTS_WITH_DISCOUNT_ALL } from './../actions/actions';


const realPrice = ({discont_price, price}) => 
    discont_price === null ? price : discont_price;
    let originalState = []

export const productsReducer = (state = [], action) => {
    switch(action.type){
        case LOAD_PRODUCTS:
            originalState = action.payload
            return action.payload

            case PRODUCTS_WITH_DISCOUNT_ALL:

                  return state.map((el) => ({
                    ...el,
                    show_by_discount: action.payload ? el.discont_price !== null : true,
                  }));
        default:
            return state
    }
}
