export function addProductToCart(id) {
  return { type: "ADD_TO_CART", payload: id };
}
