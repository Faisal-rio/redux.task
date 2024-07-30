// src/components/Products.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './Products.css'; // Import styles for Products

function Products() {
  const products = useSelector((state) => state.cart.items);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
