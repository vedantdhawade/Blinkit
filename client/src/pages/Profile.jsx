import React, { useState } from "react";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosErrorToast from "../utils/AxiosErrorToast";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateUserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    avatar: user?.avatar || null,
    password: "",
  });
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || null);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle avatar file change and preview
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formfile = new FormData();
    formfile.append("avatar", file);

    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.uploadAvatar,
        data: formfile,
      });
      if (response.data.success) {
        setFormData({ ...formData, avatar: response.data.data });
        setAvatarPreview(URL.createObjectURL(file)); // Display avatar preview
        setLoading(false);
      }
    } catch (error) {
      AxiosErrorToast(error.message);
      setLoading(false);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation

    try {
      const response = await Axios({
        ...SummaryApi.updateuser,
        data: formData,
      });
      if (response.data.status) {
        toast.success("Data Updated Successfully");
        dispatch(setUser(response.data.message));
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update data. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-3">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img
                src={avatarPreview || "default-avatar.png"} // Display preview or default image
                alt="Avatar"
                className="w-24 h-24 rounded-full border-2 border-yellow-500"
              />
              <label
                htmlFor="avatar"
                className="absolute bottom-0 right-0 bg-yellow-500 text-white p-1 rounded-full cursor-pointer"
              >
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="text-sm">Change</span>
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter a new password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserDetails;
