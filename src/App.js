import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from 'react';
import Dashboard from "./screens/Dashboard/Dashboard";
import Landing from "./screens/Landing/Landing";
import Shop from "./screens/Shop/Shop";
import LatestProduct from "./screens/LatestProduct/LatestProduct";
import ProductDescPage from "./screens/Product/ProductDesc";
import Wishlist from "./screens/Wishlist/Wishlist";
import Cart from "./screens/Cart/Cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Account from "./screens/Acount/Account";

import { useDispatch } from 'react-redux';
import { fetchRates } from './features/rates/ratesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates());

    const interval = setInterval(() => {
      dispatch(fetchRates());
    }, 600000); // 10 minutes in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [dispatch]);
  return (
    <div id="App">
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/explore" element={<LatestProduct />} />
            <Route path="/product" element={<ProductDescPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
