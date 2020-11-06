import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/products/actions";
import { selectAllProducts } from "../store/products/selectors";
import "./Products.scss";

export default function Products() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log("PRODUCTS COMP:", products);
  return (
    <div>
      <h1>Products page</h1>
    </div>
  );
}
