import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import AxiosErrorToast from "../utils/AxiosErrorToast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { removeUserDetails } from "../store/userSlice";
import toast from "react-hot-toast";
import { FiExternalLink } from "react-icons/fi";
import { CgProfile } from "react-icons/cg"; // Default profile icon
import isAdmin from "../utils/isAdmin";

const UserDetails = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handlelogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });
      if (response.data.success) {
        if (close) {
          close();
        }

        dispatch(removeUserDetails());
        localStorage.removeItem("token");
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      AxiosErrorToast(error);
    }
  };

  return (
    <div className="w-full">
      {/* User Image Section */}
      <div className="flex flex-col items-center p-4 border-b border-gray-200">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-md">
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
        <h3 className="mt-3 text-lg font-semibold text-gray-700">
          {user?.name || "Guest User"}
        </h3>
        {/* User Phone or Email */}
        <p className="text-sm text-gray-500">
          {user?.phone || user?.email || "No Details Available"}
        </p>
      </div>

      {/* Account Details */}
      <div className="font-semibold p-2">My Account</div>
      <div className="p-2 flex justify-between items-center">
        {user.name || user.phone}
        <div>
          <Link to={"/dashboard/profile"}>
            <FiExternalLink />
          </Link>
        </div>
      </div>

      <Divider />

      {/* Navigation Links */}
      <div className="grid text-sm p-1">
        {isAdmin(user.role) ? (
          <div className="grid text-sm ">
            <Link
              to={"/dashboard/catogery"}
              className="p-2 hover:bg-yellow-300"
            >
              Catogery
            </Link>
            <Link
              to={"/dashboard/subcategory"}
              className="p-2 hover:bg-yellow-300"
            >
              Sub Category
            </Link>
            <Link
              to={"/dashboard/products"}
              className="p-2 hover:bg-yellow-300"
            >
              Products
            </Link>
          </div>
        ) : null}

        <Link to={"/dashboard/orders"} className="p-2 hover:bg-yellow-300">
          Orders
        </Link>
        <Link to={"/dashboard/address"} className="p-2 hover:bg-yellow-300">
          Save Address
        </Link>
        <button
          className="text-left p-2 hover:bg-yellow-300"
          onClick={handlelogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
