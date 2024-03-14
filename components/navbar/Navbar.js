import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../../context/appContext";
export default function Navbar() {
  const { cartItems, orders, user, setUser, setFlag } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH;
  const values = Object.values(cartItems);
  const total = values.length;
  const myOrders = orders.filter((elem) => elem.email === user.email);
  const handleLogout = () => {
    setUser((prev) => ({ ...prev, ...{ name: "", email: "", pass: "" } }));
    setFlag((prev) => 0);
  };
  return (
    <div className="navbar">
      <div className="title">Irish Cafe</div>
      <div>
        <h3>Hi {user.name}!</h3>
      </div>
      <div className="links">
        <Link to={`${PATH}/`}> Products </Link>
        <Link to={`${PATH}/order`}> Orders({myOrders.length}) </Link>
        <Link to={`${PATH}/cart`}> Cart({total}) </Link>
        <Link to={`${PATH}/`} onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}
