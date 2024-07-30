// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import './Home.css'; // Import styles for Home

function Home() {
  const products = useSelector((state) => state.cart.items);

  return (
    <div className="home-container">
      <h1>Welcome to Our Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="navigation-links">
        <Link to="/products">See All Products</Link>
        <Link to="/orders">View Orders</Link>
      </div>
    </div>
  );
}

export default Home;
