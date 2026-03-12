import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('App Integration', () => {
    it('adds a product to cart and updates the summary', async () => {
        render(<App />);

        // Check initial state
        expect(screen.getByTestId('cart-count')).toHaveTextContent('Total Items: 0');
        expect(screen.getByRole('button', { name: /clear cart/i })).toBeDisabled();

        // Find the first "Add to Cart" button (Wireless Mouse)
        const addButtons = screen.getAllByRole('button', { name: /add to cart/i });

        // Click it
        fireEvent.click(addButtons[0]);

        // Check cart updates correctly
        expect(screen.getByTestId('cart-count')).toHaveTextContent('Total Items: 1');
        expect(screen.getByTestId('cart-total')).toHaveTextContent('Total Price: $25.99');

        // Clear cart
        const clearButton = screen.getByRole('button', { name: /clear cart/i });
        expect(clearButton).not.toBeDisabled();

        fireEvent.click(clearButton);
        expect(screen.getByTestId('cart-count')).toHaveTextContent('Total Items: 0');
        expect(screen.getByTestId('cart-total')).toHaveTextContent('Total Price: $0.00');
    });
});
