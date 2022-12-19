import React from "react";
import "./Products.css";
const Products = ({ productItem, handleAddProduct }) => {
  return (
    <div className="products">
      {productItem.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="products-img"
              src={productItem.img}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="products-name">{productItem.name}</h3>
          </div>
          <div className="products-price">{productItem.price}</div>
          <div>
            <button
              className="products-add-button"
              onClick={() => handleAddProduct(productItem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
