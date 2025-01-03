import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import AxiosErrorToast from "../utils/AxiosErrorToast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { removeUserDetails } from "../store/userSlice";
import toast from "react-hot-toast";
const UserDetails = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });

  const handlelogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });
      if (response.data.success) {
        close();
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
    <div className="">
      <div className="font-semibold p-2">My Account</div>
      <div className="p-2"> {user.name || user.phone} </div>
      <Divider />
      <div className="grid text-sm  p-1">
        <Link to={""} className="p-2 hover:bg-yellow-300">
          Orders
        </Link>
        <Link to={""} className="p-2 hover:bg-yellow-300">
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
