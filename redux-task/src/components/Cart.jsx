// src/components/Cart.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../redux/cartSlice';
import './Cart.css'; // Import styles for Cart

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const shippingCost = useSelector((state) => state.cart.shippingCost);
  const subtotal = useSelector((state) => state.cart.selectors.getSubtotal(state));
  const totalAmount = useSelector((state) => state.cart.selectors.getTotalAmount(state));

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul className="cart-items">
        {items.filter(item => item.quantity > 0).map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="totals">
        <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
        <h3>Shipping: FREE</h3>
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>
      <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
    </div>
  );
}

export default Cart;
