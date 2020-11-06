export const selectCartIds = (state) => {
  return state.cart.all.map((product) => product.productId);
};

export const selectCart = (state) => {
  return state.cart.all;
};
