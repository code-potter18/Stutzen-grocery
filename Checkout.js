import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];
  const total = location.state?.total || 0;

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="checkout-container">

      {/* LEFT SECTION */}
      <div className="checkout-left">

        <h2>Delivery Address</h2>

        <div className="address-box">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Phone Number" />
        </div>

        <h2>Your Items</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}

      </div>

      {/* RIGHT SECTION */}
      <div className="checkout-right">

        <h3>Order Summary</h3>

        <div className="summary-line">
          <span>Items ({cart.length})</span>
          <span>₹{total}</span>
        </div>

        <div className="summary-line">
          <span>Delivery</span>
          <span>₹0</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </div>

        <button className="place-order-btn" onClick={handleOrder}>
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;
