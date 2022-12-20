import React from "react";
import { Route, Switch } from "react-router-dom";
import Carts from "../Carts/Carts";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
const Routess = ({
  productItem,
  cartItem,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClear,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItem={productItem}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/cart" exact>
          <Carts
            cartItem={cartItem}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClear={handleCartClear}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routess;
