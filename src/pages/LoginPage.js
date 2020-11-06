import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../store/auth/actions";
import { selectToken } from "../store/auth/selectors";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const tokenAvailable = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("TODO login with:", email, password);

    dispatch(login(email, password));
    // setEmail("");
    // setPassword("");
  }

  if (tokenAvailable) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </div>
  );
}
