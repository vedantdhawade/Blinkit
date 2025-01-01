import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotOTPPage = () => {
  const [data, setdata] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setdata(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
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
              value={data}
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
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Get OTP
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
