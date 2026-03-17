import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Wireless Mouse', price: 25.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80' },
  { id: 2, name: 'Mechanical Keyboard', price: 75.50, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80' },
  { id: 3, name: 'Monitor Stand', price: 40.00, image: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=500&q=80' }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Tech Store <span className="gradient-text">Pro</span></h1>
        <p className="subtitle">Premium gear for developers and creators</p>
      </div>
      <div className="store-container">
        <div className="products-section">
          <h2>Products</h2>
          <ProductList products={MOCK_PRODUCTS} addToCart={addToCart} />
        </div>
        <div className="cart-section">
          <CartSummary cartItems={cart} clearCart={clearCart} />
          <CheckoutForm cartItems={cart} onCheckout={clearCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
