import React, { Children } from "react";
import isAdmin from "../utils/isAdmin.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckAdmin = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return <>{isAdmin(user.role) ? children : <p>Access Denied</p>}</>;
};

export default CheckAdmin;