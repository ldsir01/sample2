import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import ProductList from "./components/ProductList";
import commerce from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const [order, setOrder] = useState({});
  const [errorMessage, setErorrMessage] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const featchCart = async () => {
    setCart(await commerce.cart.retrieve());
    console.log(cart);
  };

  // const handleRefreshCart = async () => {
  //   const { cart } = await commerce.cart.refresh();
  // };

  const handleAddToCart = async (productID) => {
    const { cart } = await commerce.cart.add(productID, 1);
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    featchCart();
  }, []);

  const handleCaptureCart = async (checkoutToken, newOrder) => {
    try {
      const { incomingOrder } = commerce.checkout.capture(
        checkoutToken.id,
        newOrder
      );
      console.log(incomingOrder);
      setOrder(incomingOrder);
      // refreshCart();
    } catch (error) {
      setErorrMessage(error.data.error.message);
      console.log(errorMessage);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/checkout"
          element={
            <CheckOut cart={cart} handleCaptureCart={handleCaptureCart} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
