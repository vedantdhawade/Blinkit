export const baseUrl = "http://localhost:5000";

const SummaryApi = {
  register: {
    url: "/api/user/register",
    method: "post",
  },
  login: {
    url: "/api/user/login",
    method: "post",
  },
  forgototp: {
    url: "/api/user/forgotpassword",
    method: "put",
  },
  verifyotp: {
    url: "/api/user/verify-forgotpassword-otp",
    method: "put",
  },
  resetpassword: {
    url: "/api/user/reset-password",
    method: "put",
  },
};

export default SummaryApi;
