import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routers/User.route.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoute);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
