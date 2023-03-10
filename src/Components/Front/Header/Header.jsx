import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Header = ({ cartItem }) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Electronics Shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <AddShoppingCartIcon />
              <span className="cart-length">
                {cartItem.length === 0 ? "" : cartItem.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
