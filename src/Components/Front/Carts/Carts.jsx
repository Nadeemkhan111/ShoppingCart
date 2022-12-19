import React from "react";
import "./Cart.css";
const Carts = ({ cartItem, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-item">
      <div className="cart-item-header">Carts is Here</div>
      {cartItem.length === 0 && (
        <div className="cart-item-emty">no item are add</div>
      )}
      <div>
        {cartItem.map((item) => (
          <div className="cart-item-list">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-function">
              <button
                className="cart-item-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-item-remove"
                onClick={() => handleRemoveProduct}
              >
                -
              </button>
            </div>
            <div className="cart-item-price">
              {item.quantity}*${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-item-total-price-name">
        Total Price
        <div className="cart-item-total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default Carts;
