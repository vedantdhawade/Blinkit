import express from "express";
import {
  loginController,
  logoutController,
  RegisterUser,
  verifyEmailController,
} from "../controllers/user.controller.js";
import AuthMiddleware from "../middleware/auth.js";
const userRoute = express.Router();

userRoute.post("/register", RegisterUser);
userRoute.post("/verify-email", verifyEmailController);
userRoute.post("/login", loginController);
userRoute.get("/logout", AuthMiddleware, logoutController);

export default userRoute;
