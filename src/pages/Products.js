import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/products/actions";
import { selectAllProducts } from "../store/products/selectors";
import "./Products.scss";
import { addProductToCart } from "../store/cart/actions";

export default function Products() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const onClickAddItem = (id) => {
    dispatch(addProductToCart(id));
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
                  </button>
                  <button>Remove item</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
