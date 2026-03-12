import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList';

describe('ProductList Component', () => {
    const mockProducts = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 }
    ];
    const mockAddToCart = jest.fn();

    it('renders "No products available" when list is empty', () => {
        render(<ProductList products={[]} addToCart={mockAddToCart} />);
        expect(screen.getByText('No products available.')).toBeInTheDocument();
    });

    it('renders a list of ProductCard components', () => {
        render(<ProductList products={mockProducts} addToCart={mockAddToCart} />);
        expect(screen.getAllByRole('button', { name: /add to cart/i })).toHaveLength(2);
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
});
