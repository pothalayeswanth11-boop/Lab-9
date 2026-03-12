import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import './App.css';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Wireless Mouse', price: 25.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 75.50 },
  { id: 3, name: 'Monitor Stand', price: 40.00 }
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
      <h1>Tech Store</h1>
      <div className="store-container">
        <div className="products-section">
          <h2>Products</h2>
          <ProductList products={MOCK_PRODUCTS} addToCart={addToCart} />
        </div>
        <div className="cart-section">
          <CartSummary cartItems={cart} clearCart={clearCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
