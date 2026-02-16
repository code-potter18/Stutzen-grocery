import React from "react";
import "./Navbar.css";

const Navbar = ({ searchTerm, setSearchTerm, cartCount }) => {
  return (
    <div className="navbar">
      <h2 className="logo">🛒 Stutzen Grocery</h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="nav-buttons">
        <button>Home</button>
        <button>Offers</button>
        <button>Cart ({cartCount})</button>
      </div>
    </div>
  );
};

export default Navbar;
