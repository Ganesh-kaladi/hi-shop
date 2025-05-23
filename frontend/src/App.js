import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Orders";
import SingleOrder from "./pages/SingleOrder";
import User from "./pages/User";
import GlobalStyles from "./styles";
import AppLayout from "./ui/AppLayout";
import Rewards from "./pages/Rewards";
import Invite from "./pages/Invite";
import Payments from "./pages/Payments";
import Address from "./pages/Address";
import ResetPassword from "./pages/ResetPassword";
import UpdateUser from "./pages/UpdateUser";
import UserDetails from "./pages/UserDetails";
import Customercare from "./pages/Customercare";
import SignUp from "./pages/SignUp";
import AdminPRoduct from "./pages/admin/AdminPRoduct";
import PlaceOrder from "./pages/PlaceOrder";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />

            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="place-order"
              element={
                <ProtectedRoute>
                  <PlaceOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="orders/:id"
              element={
                <ProtectedRoute>
                  <SingleOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="user"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="orders" replace />} />
              <Route path="orders" element={<Orders />} />
              <Route path="rewards" element={<Rewards />} />
              <Route path="invite-friend" element={<Invite />} />
              <Route path="custmorecare" element={<Customercare />} />
              <Route path="user-details" element={<UserDetails />} />
              <Route path="update-user-details" element={<UpdateUser />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="add-update-address" element={<Address />} />
              <Route path="payments" element={<Payments />} />
            </Route>

            <Route path="Admin" element={<Admin />} />
            <Route path="create-product" element={<AdminPRoduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
