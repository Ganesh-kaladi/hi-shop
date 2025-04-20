import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CartPage from "./page/CartPage";
import LoginPage from "./page/LoginPage";
import ProductOne from "./page/ProductOne";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="product/:productID" element={<ProductOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
