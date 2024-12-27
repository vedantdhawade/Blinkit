import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import verifyEmailTemplate from "../utils/VerifyEmail.js";
import sendEmail from "../config/sendEmail.js";

const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        error: "All fields are required",
      });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const save = await newUser.save();
    const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`;
    const verifyemail = sendEmail({
      sendto: email,
      subject: "Verify your email address",
      html: verifyEmailTemplate({
        name,
        url: VerifyEmailUrl,
      }),
    });
    return res.json({
      message: "User register successfully",
      error: false,
      success: true,
      data: save,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: "Register Model Error",
      message: error.message,
    });
  }
};

export default RegisterUser;
