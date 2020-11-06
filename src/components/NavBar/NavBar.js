import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div>
      <div className="NavBar">
        <NavLink
          className="navbar-products"
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Products
        </NavLink>
        <NavLink
          className="navbar-shopping-cart"
          exact
          to="/shopping-cart"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
}
