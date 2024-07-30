import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
