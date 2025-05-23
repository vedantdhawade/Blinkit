import React, { useState } from "react";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosErrorToast from "../utils/AxiosErrorToast";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOTPPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill("")); // Initialize state for OTP

  // Handle input change
  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/g, ""); // Only digits
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Auto-focus next input box
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      const newOtp = [...otp];
      if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        e.target.previousSibling.focus(); // Move focus to the previous box
      }
    }
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    // Add API call or logic to verify OTP here
    try {
      const response = await Axios({
        ...SummaryApi.verifyotp,
        data: {
          email: location.state.email,
          otp: enteredOtp,
        }, // Ensure the API expects this format
      });

      if (response?.data?.success) {
        toast.success(response.data.message);
        navigate("/reset-passwoord", {
          state: {
            email: location.state.email,
            success: response.data.success,
          },
        });
      } else {
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (err) {
      console.log(err);
      AxiosErrorToast(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Verify OTP
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter the 6-digit OTP sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center gap-2">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 border border-gray-300 text-center text-xl rounded-lg shadow focus:ring-yellow-400 focus:border-yellow-400"
                autoFocus={index === 0}
              />
            ))}
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Verify OTP
            </button>
          </div>
        </form>
        {/* Resend OTP */}
        <div className="mt-4 text-center">
          <a href="/forgot" className="text-sm text-gray-600 hover:underline">
            Resend OTP
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;
