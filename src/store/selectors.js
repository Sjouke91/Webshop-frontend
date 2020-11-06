export const selectAllProducts = (state) => {
  const products = state.products.all;
  const cartItems = state.cart.all;

  const productsInCart = products.filter((p) => {
    const itemArray = cartItems.map((item) => item.productId);
    return itemArray.includes(p.id);
  });

  const productWithQuantity = productsInCart.map((p) => {
    const cartItem = cartItems.find((i) => {
      return p.id === i.productId;
    });

    return { ...p, quantity: cartItem.quantity };
  });

  return productWithQuantity;
};
