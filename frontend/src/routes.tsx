import { Routes, Route } from 'react-router';
import SignIn from './views/SignIn/SignIn';
import { Outlet, Navigate } from 'react-router-dom'; // Correct imports for routing
import { useAuth } from './context/AuthContext';
import Home from './views/Dashboard/Dashboard';
import AdminLayout from './layout/admin-layout';
import Users from './views/Users/Users';
import Product from './views/Product/product';
import Supplier from './views/Supplier/Supplier';
import Brand from './views/Brands/Brand';
import Customer from './views/Customer/customer';
import Companies from './views/Companies/Companies';
import Stores from './views/Stores/Stores';
import Orders from './views/Orders/Orders';
const PrivateRoutes = () => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate to="/sign-in" />;
    }

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
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/suppliers" element={<Supplier />} />
                    <Route path="/brands" element={<Brand />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/stores" element={<Stores />} />
                </Route>
                {/* Add more protected routes here */}
            </Route>
        </Routes>
    );
};
