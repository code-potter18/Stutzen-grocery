import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function App() {

  // CART STATE
  const [cart, setCart] = useState({});

  // SEARCH STATE
  const [searchTerm, setSearchTerm] = useState("");

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  // REMOVE FROM CART
  const removeFromCart = (product) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[product.id] > 1) {
        updated[product.id] -= 1;
      } else {
        delete updated[product.id];
      }
      return updated;
    });
  };

  // TOTAL CART COUNT
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartCount={cartCount}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />

        <Route
          path="/checkout"
          element={<Checkout cart={cart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
