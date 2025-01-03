import React from "react";
import UserDetails from "../components/UserDetails";
import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg"; // Default profile icon

const Dashboard = ({ user }) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] container mx-auto p-3 gap-4">
        {/* Sidebar */}
        <div className="bg-white sticky top-24 overflow-y-auto hidden lg:block h-screen shadow-md rounded-md">
          <div className="flex flex-col items-center p-6 border-b border-gray-200">
            {/* User Icon or Image */}
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-md">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <CgProfile size={48} className="text-gray-400" />
              )}
            </div>
            {/* User Name */}
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {user?.name || "Guest User"}
            </h3>
            {/* User Email */}
            <p className="text-sm text-gray-500">{user?.email || "No Email"}</p>
          </div>
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
