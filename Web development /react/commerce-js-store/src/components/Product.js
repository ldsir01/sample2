import React from "react";

const Product = ({ product, handleAddToCart }) => {
  return (
    <span>
      <div>{product.name}</div>
      <button
        onClick={() => {
          handleAddToCart(product.id);
        }}
      >
        Add to cart
      </button>
    </span>
  );
};

export default Product;
