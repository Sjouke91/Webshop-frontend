import React from "react";
import "./ShoppingCart.scss";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../store/selectors";

export default function ShoppingCart() {
  const productsInCart = useSelector(selectAllProducts);

  return (
    <div className="shoppingCart">
      <h1>Shopping cart page</h1>
      <div className="listOfProducts">
        {productsInCart.map((p) => {
          console.log("this is p", p);
          return (
            <div className="cartItem">
              <p>{parseInt(p.quantity)}</p>
              <p>{p.name}</p>
              <p>€ {parseInt(p.priceEuroCent / 100)}</p>
              <p>{(p.priceEuroCent * p.quantity) / 100}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
