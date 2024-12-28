import express from "express";
import {
  loginController,
  logoutController,
  RegisterUser,
  uploadAvatar,
  verifyEmailController,
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

export default userRoute;
