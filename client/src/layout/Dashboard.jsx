import React from "react";
import UserDetails from "../components/UserDetails";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[250px,1fr] container-fluid mx-auto p-3 gap-4">
        {/* Sidebar */}
        <div className="bg-white sticky top-24 overflow-y-auto hidden lg:block h-screen">
          <UserDetails />
        </div>
        {/* Main Content */}
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
