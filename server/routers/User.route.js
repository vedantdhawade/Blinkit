import express from "express";
import {
  forgotPasswordController,
  loginController,
  logoutController,
  refreshToken,
  RegisterUser,
  resetpassword,
  updateUser,
  uploadAvatar,
  userDetails,
  verifyEmailController,
  verifyForgotPasswordOtp,
} from "../controllers/user.controller.js";
import AuthMiddleware from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const userRoute = express.Router();

userRoute.post("/register", RegisterUser);
userRoute.post("/verify-email", verifyEmailController);
userRoute.post("/login", loginController);
userRoute.get("/logout", AuthMiddleware, logoutController);
userRoute.put(
  "/upload-avatar",
  AuthMiddleware,
  upload.single("avatar"),
  uploadAvatar
);
userRoute.put("/updatedetails", AuthMiddleware, updateUser);
userRoute.put("/forgotpassword", forgotPasswordController);
userRoute.put("/verify-forgotpassword-otp", verifyForgotPasswordOtp);
userRoute.put("/reset-password", resetpassword);
userRoute.post("/refresh-token", refreshToken);
userRoute.get("/user-details", AuthMiddleware, userDetails);
export default userRoute;
