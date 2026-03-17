import React, { useState } from 'react';

const CheckoutForm = ({ cartItems, onCheckout }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address && cartItems.length > 0) {
      setSuccess(true);
      onCheckout(); // Clear cart logic usually goes here
    }
  };

  if (success) {
    return <p className="success-message" role="alert">Order Placed Successfully!</p>;
  }

  return (
    <div className="checkout-form">
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit} data-testid="checkout-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          data-testid="name-input"
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          role="textbox"
          name="address"
        />
        <button 
          type="submit" 
          disabled={cartItems.length === 0 || !name || !address}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
