import React, { ReactNode } from "react";
import { Outlet } from "react-router";
import { AppSidebar } from "../components/AppSidebar";
const AdminLayout = () => {
  return (
    <div>
      <div>
        <AppSidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
