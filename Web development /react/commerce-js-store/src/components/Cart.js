import React, { useState } from "react";
import { Link } from "react-router-dom";
import commerce from "../lib/commerce";

const Cart = ({ cart }) => {
  console.log(cart);

  if (!cart.line_items) return "...loading";

  const isEmpty = cart.line_items.length;

  const renderEmptyCart = () => {
    return (
      <div>
        <h1>Your cart is empty</h1>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  };

  const renderCart = () => {
    return (
      <div>
        <h1>Your cart</h1>
        {cart.line_items.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
        <h3>Subtotal {cart.subtotal.formatted_with_symbol}</h3>
        <button>Checkout</button>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  };

  return (
    <div>
      <hr />
      <Link to="/">HOME</Link>
      <h1>This is cart</h1>
      {isEmpty ? renderCart() : renderEmptyCart()}
    </div>
  );
};

export default Cart;
