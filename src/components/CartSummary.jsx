import React from 'react';

const CartSummary = ({ cartItems, clearCart }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-summary" data-testid="cart-summary">
            <h2>Cart Summary</h2>
            <p data-testid="cart-count">Total Items: {cartItems.length}</p>
            <p data-testid="cart-total">Total Price: ${total.toFixed(2)}</p>
            <button onClick={clearCart} disabled={cartItems.length === 0}>
                Clear Cart
            </button>
        </div>
    );
};

export default CartSummary;
