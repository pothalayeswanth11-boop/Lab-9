import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart }) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
