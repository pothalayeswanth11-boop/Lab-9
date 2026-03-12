import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('ProductCard Component', () => {
    const mockProduct = { id: 1, name: 'Test Product', price: 99.99 };
    const mockAddToCart = jest.fn();

    it('renders product details correctly', () => {
        render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    it('calls addToCart function when button is clicked', () => {
        render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

        const button = screen.getByRole('button', { name: /add to cart/i });
        fireEvent.click(button);

        expect(mockAddToCart).toHaveBeenCalledTimes(1);
        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});
