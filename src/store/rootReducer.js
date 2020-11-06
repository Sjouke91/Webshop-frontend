import { combineReducers } from "redux";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  // etc.
});

export default reducer;
