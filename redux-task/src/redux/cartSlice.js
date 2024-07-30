import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Apple iPhone 14', price: 799, quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHV2YA-AnK_dEW_NWft-1DJtKJqmLk2OnvA&s' },
    { id: 2, name: 'Apple MacBook Pro', price: 1299, quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEssYgNSNIfgz3rPokvU0EJjTlHfgRPMbAGA&s' },
    { id: 3, name: 'Apple iPad Air', price: 599, quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyodS7tUUMSKipgs5PeFYTe6v7_lM41nRIw&s' },
    { id: 4, name: 'Apple Watch Series 7', price: 399, quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8PPAffjBRrdYDy2XhXxKgxc6zsSg5qeJig&s' },
    { id: 5, name: 'Apple AirPods Pro', price: 249, quantity: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO68dxqvAsGlyZhtM0P7F4nrvkQjLTRMLZ1Q&s' },
  ],
  orders: [], // Initialize orders state
  shippingCost: 0, // Shipping cost is free
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    placeOrder: (state) => {
      const order = state.items
        .filter(item => item.quantity > 0)
        .map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          total: item.quantity * item.price,
        }));

      state.orders.push(...order);

      // Reset quantities after placing the order
      state.items.forEach(item => item.quantity = 0);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, placeOrder } = cartSlice.actions;

// Selectors
export const getSubtotal = (state) => state.cart.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
export const getTotalAmount = (state) => getSubtotal(state) + state.cart.shippingCost;

export default cartSlice.reducer;
