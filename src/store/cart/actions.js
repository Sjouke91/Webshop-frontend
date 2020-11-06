export function addProductToCart(id) {
  return { type: "ADD_TO_CART", payload: id };
}

export function removeProductFromCart(id) {
  return { type: "REMOVE_FROM_CART", payload: id };
}
