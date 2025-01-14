import React, { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosErrorToast from "../utils/AxiosErrorToast";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotOTPPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await Axios({
        ...SummaryApi.forgototp,
        data: { email }, // Ensure the API expects this format
      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/verify-otp", {
          state: {
            email: email,
          },
        });
        setEmail(""); // Clear the email field
      } else {
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      AxiosErrorToast(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Forgot OTP
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter your email address to receive an OTP.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
              placeholder="Enter your email"
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
              {isLoading ? "Sending..." : "Get OTP"}
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

export default ForgotOTPPage;
