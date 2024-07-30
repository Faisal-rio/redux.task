// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">MyApp</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
