import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import Routess from "./Components/Front/Routes/Routess";
const App = () => {
  const { productItem } = data;
  const [cartItem, setCartItem] = useState([]);
  const handleAddProduct = (product) => {
    const productexit = cartItem.find((item) => item.id === product.id);
    if (productexit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productexit, quantity: productexit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productexit = cartItem.find((item) => item.id === product.id);
    if (productexit.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productexit, quantity: productexit.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <div>
      <Router>
        <Header />
        <Routess
          productItem={productItem}
          cartItem={cartItem}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      </Router>
    </div>
  );
};

export default App;
