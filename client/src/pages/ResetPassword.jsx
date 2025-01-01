import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosErrorToast from "../utils/AxiosErrorToast";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      console.log(location.state.email, password, confirmPassword);
      const response = await Axios({
        ...SummaryApi.resetpassword,
        data: {
          email: location.state.email,
          newPassword: password,
          confirmPassword: confirmPassword,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Failed to reset password.");
      }
    } catch (error) {
      console.log(error);
      AxiosErrorToast(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Reset Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter your new password below.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Enter new password"
            />
          </div>
          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Confirm new password"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-lg shadow-md transition ${
                isLoading
                  ? "bg-yellow-300 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
        {/* Back to Login */}
        <div className="mt-4 text-center">
          <a href="/login" className="text-sm text-gray-600 hover:underline">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
