import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import Products from "./components/product/Products.js";

import Cart from "./components/cart/Cart.js";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/user/Login.js";
import { AppContext } from "./context/appContext.js";
import Logout from "./components/user/Logout.js";
import Footer from "./components/footer/Footer.js";
import Orders from "./components/order/Orders.js";

function App() {
  const PATH = process.env.REACT_APP_PATH;
  const { flag, setFlag } = useContext(AppContext);

  return (
    <div className="App">
      {/* {flag < 2 ? (
        <Login />
      ) : ( */}
        <Router>
          <Navbar />
          <hr></hr>
          <Routes>
            <Route path={`${PATH}/`} element={<Products />} />
            <Route path={`${PATH}/order`} element={<Orders />} />
            <Route path={`${PATH}/cart`} element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      {/* )} */}
    </div>
  );
}
export default App;
