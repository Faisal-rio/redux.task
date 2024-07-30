// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Orders from './components/Orders';
import Cart from './components/Cart'; // Import Cart component
import cartSlice from './redux/cartSlice';
import { store } from './redux/store';
import './App.css'; // Import global CSS


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
