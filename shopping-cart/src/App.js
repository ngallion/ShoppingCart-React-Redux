import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import Cart from "./components/Cart";
import Checkout from './components/Checkout'
import { items } from "./ShoppingCartData";
import { items2 } from "./ShoppingCartData2";
import { items3 } from "./ShoppingCartData3";

const Home = items => {
  return (
    <div className="row">
      <div className="col s2">
        <Cart />
        <Link to="/checkout">  <button className="btn-small #ff7043 deep-orange lighten-1 waves-effect waves-light" type="submit" name="action">Checkout
    <i className="material-icons right">send</i>
  </button></Link>
      </div>
      <div className="col s10">
        <HomePage items={items} />
      </div>
    </div>
  );
};

const checkout = () => {
  return (
    <div className="checkout-page center">
      <Checkout />
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <nav className='#00bcd4 cyan'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Waffles">Waffles</Link>
            </li>
            <li>
              <Link to="/Omelettes">Omelettes</Link>
            </li>
            <li>
              <Link to="/baconOrSomething">Dead Animals</Link>
            </li>
          </ul>
        </nav>
        <div className="row">
          <div>
            <Route
              path="/"
              exact
              component={() => Home([...items, ...items2, ...items3])}
            />
          </div>
          <div>
            <Route path="/Waffles" exact component={() => Home([...items])} />
          </div>
          <div>
            <Route
              path="/Omelettes"
              exact
              component={() => Home([...items2])}
            />
          </div>
          <div>
            <Route
              path="/baconOrSomething"
              exact
              component={() => Home([...items3])}
            />
          </div>
          <div>
            <Route path="/checkout" exact component={checkout} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
