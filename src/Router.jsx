

import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "./Components/DataProvider/DataProvider";

import LayOut from "./Components/LayOut/LayOut";
import AuthLayout from "./Components/LayOut/AuthLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/SignIn";
import Register from "./Pages/Auth/Register";
import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Returns from "./Pages/Returns/Returns"; // (add file below)
import Results from "./Pages/Results/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function Routing() {
  const { state } = useContext(DataContext);
  const user = state.user;

  return (
    <Routes>
      <Route element={<LayOut />}>
        <Route index element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryCardName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        <Route
          path="/payments"
          element={
            <ProtectedRoute user={user}>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute user={user}>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/returns"
          element={
            <ProtectedRoute user={user}>
              <Returns />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Navigate to="/auth/login" replace />} />

        <Route
          path="/auth/login"
          element={
            <PublicRoute user={user}>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/register"
          element={
            <PublicRoute user={user}>
              <Register />
            </PublicRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Routing;
