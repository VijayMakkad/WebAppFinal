import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import authstore from '../features/auth/store'; 

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authstore.reducer, 
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
