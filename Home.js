import React, { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // ✅ SEARCH STATE
  const navigate = useNavigate();

  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ✅ REMOVE ONE ITEM (for minus button)
  const removeOneFromCart = (productId) => {
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  // ❌ REMOVE FROM DRAWER (existing)
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const categories = [
    "All",
    "Fruits",
    "Dairy",
    "Bakery",
    "Vegtables",
    "Petcare",
    "Health & Cleaning",
    "Reverage",
    "Health & Beauty",
    "Clothes",
    "Snacks",
  ];

  // ✅ FILTER CATEGORY + SEARCH
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const finalProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ COUNT PRODUCT QUANTITY
  const getQuantity = (productId) => {
    return cart.filter((item) => item.id === productId).length;
  };

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <div className="navbar">
        <h2 className="logo">🛒 Stutzen Grocery</h2>

        {/* ✅ SEARCH BAR */}
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="nav-buttons">
          <button onClick={() => setSelectedCategory("All")}>Home</button>
          <button>Offers</button>
          <button onClick={() => setShowCart(!showCart)}>
            Cart ({cart.length})
          </button>
        </div>

        {/* Offer Banner (your existing) */}
        <div className="navbar-offer-banner">
          <img
      
            alt="Offer Banner"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Categories</h3>
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`sidebar-item ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {finalProducts.length === 0 && <p>No products found</p>}

          {finalProducts.map((product) => {
            const quantity = getQuantity(product.id);

            return (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>₹{product.price}</p>

                {/* ✅ PLUS MINUS BUTTON */}
                {quantity > 0 ? (
                  <div className="quantity-control">
                    <button onClick={() => removeOneFromCart(product.id)}>
                      −
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CART DRAWER */}
      {showCart && (
        <div className="cart-drawer">
          <h2>Your Cart</h2>

          {cart.length === 0 && <p>No items added</p>}

          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div>
                <p>{item.name}</p>
                <small>₹{item.price}</small>
              </div>
              <button onClick={() => removeFromCart(index)}>✖</button>
            </div>
          ))}

          <hr />
          <h3>Total: ₹{total}</h3>

          <button
            className="checkout-btn"
            onClick={() =>
              navigate("/checkout", { state: { cart, total } })
            }
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
