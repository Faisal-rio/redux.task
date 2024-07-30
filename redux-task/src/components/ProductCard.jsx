// src/components/ProductCard.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import './ProductCard.css'; // Import styles for ProductCard

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
        <div className="quantity-control">
          <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
        </div>
        <p>Total: ${(product.quantity * product.price).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
