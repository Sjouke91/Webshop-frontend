import Axios from "axios";
import { API_URL } from "../../config";

export function fetchAllProducts() {
  //   console.log("HELLLOOOOOO");
  return async function thunk(dispatch, getState) {
    try {
      const res = await Axios.get(`${API_URL}/products`);
      //   console.log("res", res);

      const products = res.data;

      dispatch(addProducts(products));
    } catch (error) {
      console.log("ERROR:", error);
    }
  };
}

function addProducts(products) {
  //   console.log("ACTIONS products", products);
  return { type: "ADD_PRODUCTS", payload: products };
}
