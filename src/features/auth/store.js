import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const authstore = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default authstore;