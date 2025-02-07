import { Routes, Route } from "react-router";
import SignIn from "./views/SignIn/SignIn";
import { Outlet, Navigate } from "react-router-dom"; // Correct imports for routing
import { useAuth } from "./context/AuthContext";
import Home from "./views/Home/Home";
import AdminLayout from "./layout/admin-layout";
const PrivateRoutes = () => {
  const { isAuth } = useAuth();

  // If the user is not authenticated, redirect them to the sign-in page
  if (!isAuth) {
    return <Navigate to="/sign-in" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route for Sign-In */}
      <Route path="/sign-in" element={<SignIn />} />

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        {/* This route is protected and requires authentication */}
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Add more protected routes here */}
      </Route>
    </Routes>
  );
};
