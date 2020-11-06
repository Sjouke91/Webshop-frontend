import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/products/actions";
import { selectAllProducts } from "../store/products/selectors";
import "./Products.scss";
import { addProductToCart, removeProductFromCart } from "../store/cart/actions";
import { selectCart, selectCartIds } from "../store/cart/selectors";

export default function Products() {
  const products = useSelector(selectAllProducts);
  const cartIds = useSelector(selectCartIds);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const onClickAddItem = (id) => {
    dispatch(addProductToCart(id));
  };

  const onClickRemoveItem = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const findQuantityById = (id) => {
    const foundProduct = cart.find((product) => product.productId === id);
    if (!foundProduct) {
      return null;
    }
    return foundProduct.quantity;
  };

  return (
    <div className="productPage">
      <h1>Products page</h1>
      {!products ? (
        <h2>Loading...</h2>
      ) : (
        <div className="products">
          {products.map((p) => {
            return (
              <div className="productCard" key={p.id}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <img alt={p.name} src={p.imageUrl} />
                <div className="buttons">
                  <button onClick={(e) => onClickAddItem(p.id)}>
                    Add to cart
                    {findQuantityById(p.id) ? (
                      <span> ({findQuantityById(p.id)})</span>
                    ) : null}
                  </button>{" "}
                  {cartIds.includes(p.id) ? (
                    <button onClick={(e) => onClickRemoveItem(p.id)}>
                      Remove item
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
