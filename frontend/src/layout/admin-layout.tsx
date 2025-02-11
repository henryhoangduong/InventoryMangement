import { Outlet } from 'react-router';
import { AppSidebar } from '../components/AppSidebar';
import Header from '../components/Header';
const AdminLayout = () => {
    return (
        <div className="flex flex-row  w-full">
            <div className="h-[100vh]">
                <AppSidebar />
            </div>
            <div className="w-full flex flex-col ">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
