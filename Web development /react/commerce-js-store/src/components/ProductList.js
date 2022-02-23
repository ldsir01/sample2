import React from "react";
import commerce from "../lib/commerce";
import Product from "./Product";
import { Link, useLocation } from "react-router-dom";

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <h1>
      <Link to="/cart">CART</Link>

      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </h1>
  );
};

export default ProductList;
