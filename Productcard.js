import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart, removeFromCart, quantity }) => {
  return (
    <div className="product-card">
      {product.image && (
        <img src={product.image} alt={product.name} />
      )}

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      {quantity > 0 ? (
        <div className="quantity-control">
          <button onClick={() => removeFromCart(product)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
      ) : (
        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
