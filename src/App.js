import { Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

const NotFound = () => {
  return <h3>Oops, sorry. Page doesn't exist.</h3>;
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/products/:productId?">
          <ProductPage />
        </Route>
        <Route exact path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
