import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../../store/auth/actions";
import { selectUserName } from "../../store/auth/selectors";
import "./NavBar.scss";

export default function NavBar() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const history = useHistory();

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
        <NavLink
          className="navbar-login"
          exact
          to={"/login"}
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          {userName ? userName : "Login"}
        </NavLink>
        {userName ? (
          <button
            className="navbar-logout-button"
            onClick={(e) => {
              history.push("/");
              return dispatch(logout);
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}
