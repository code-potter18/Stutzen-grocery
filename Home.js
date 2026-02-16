import React, { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const categories = ["All", "Fruits", "Dairy", "Bakery","Vegtables","Petcare","Health & Cleaning","Reverage","Health & Beauty","Clothes","Snacks"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <div className="navbar">
  <h2 className="logo">🛒 Stutzen Grocery</h2>
  
  <div className="nav-buttons">
    <button onClick={() => setSelectedCategory("All")}>Home</button>
    <button>Offers</button>
    <button onClick={() => setShowCart(!showCart)}>
      Cart ({cart.length})
    </button>
  </div>

  {/* Integrated Offer Banner */}
  <div className="navbar-offer-banner">
    <img
      src="https://www.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-banner-template_238044233.htm#fromView=keyword&page=1&position=6&uuid=641a8deb-dd98-4188-95a1-b6745c10c780&query=Food+discount+banner"
      alt="Offer Banner"
    />
    <div className="offer-text">
      🔥 Up to 30% OFF on selected items!
    </div>
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
              className={`sidebar-item ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {filteredProducts.length === 0 && <p>No products found</p>}

          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
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
