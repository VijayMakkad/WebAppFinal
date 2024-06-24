import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authstore from "../features/auth/store";
import wishlistReducer from "../features/wishlist/wishlistSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authstore.reducer,
  wishlist: wishlistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
