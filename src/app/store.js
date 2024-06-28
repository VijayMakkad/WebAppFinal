import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authstore from "../features/auth/store";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import ratesReducer from "../features/rates/ratesSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authstore.reducer,
  wishlist: wishlistReducer,
  rates: ratesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
