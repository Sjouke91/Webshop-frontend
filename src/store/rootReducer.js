import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  // etc.
});

export default reducer;
