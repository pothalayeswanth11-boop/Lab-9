import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card" data-testid={`product-${product.id}`}>
            <div className="card-image-wrap">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="product-image" />
                ) : (
                    <div className="image-placeholder"></div>
                )}
            </div>
            <div className="card-content">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <button className="add-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
