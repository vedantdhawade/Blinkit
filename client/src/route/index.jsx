import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotOTPPage from "../pages/ForgotOtp";
import VerifyOTPPage from "../pages/verify-otp";
import ResetPasswordPage from "../pages/ResetPassword";
import Usermenumobile from "../pages/Usermenumobile.jsx";
import Dashboard from "../layout/Dashboard.jsx";
import Profile from "../pages/Profile.jsx";
import Myorders from "../pages/Myorders.jsx";
import Address from "../pages/Address.jsx";
import Category from "../pages/Category.jsx";
import SubCategory from "../pages/SubCategory.jsx";
import ProductAdmin from "../pages/ProductAdmin.jsx";
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
      {
        path: "reset-passwoord",
        element: <ResetPasswordPage />,
      },
      {
        path: "mobileProfile",
        element: <Usermenumobile />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "orders",
            element: <Myorders />,
          },
          {
            path: "address",
            element: <Address />,
          },
          {
            path: "catogery",
            element: <Category />,
          },
          {
            path: "subcategory",
            element: <SubCategory />,
          },
          {
            path: "products",
            element: <ProductAdmin />,
          },
        ],
      },
    ],
  },
]);

export default router;
