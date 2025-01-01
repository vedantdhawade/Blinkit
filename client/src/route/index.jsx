import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotOTPPage from "../pages/ForgotOtp";
import VerifyOTPPage from "../pages/verify-otp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-otp",
        element: <ForgotOTPPage />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTPPage />,
      },
    ],
  },
]);

export default router;
