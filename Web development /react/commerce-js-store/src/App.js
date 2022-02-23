import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import commerce from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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
      </Routes>
    </>
  );
}

export default App;
