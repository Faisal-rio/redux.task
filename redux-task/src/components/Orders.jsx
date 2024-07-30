import React from 'react';
import { useSelector } from 'react-redux';
import { getSubtotal, getTotalAmount } from '../redux/cartSlice';
import './Orders.css'; // Import styles for Orders

function Orders() {
  const orders = useSelector((state) => state.cart.orders);
  const subtotal = useSelector(getSubtotal);
  const totalAmount = useSelector(getTotalAmount);
  const shippingCost = 0; // Shipping cost is free

  return (
    <div className="orders-container">
      <h1>Orders Page</h1>
      <ul className="orders-list">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <li key={index} className="order-item">
              <h3>{order.name}</h3>
              <p>Quantity: {order.quantity}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
            </li>
          ))
        ) : (
          <li>No orders yet</li>
        )}
      </ul>
      {orders.length > 0 && (
        <div className="totals">
          <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
          <h3>Shipping: FREE</h3>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Orders;
