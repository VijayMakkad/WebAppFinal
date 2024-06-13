import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from "./screens/Dashboard/Dashboard";
import Landing from "./screens/Landing/Landing";
import Shop from "./screens/Shop/Shop";
import LatestProduct from './screens/LatestProduct/LatestProduct';
import ProductDescPage from './screens/Product/ProductDesc';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/explore" element={<LatestProduct/>} />
          <Route path="/product" element={<ProductDescPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
