import express from "express";
import RegisterUser from "../controllers/user.controller.js";
const userRoute = express.Router();

userRoute.post("/register", RegisterUser);

export default userRoute;
