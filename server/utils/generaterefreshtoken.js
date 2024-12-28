import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const genertedRefreshToken = async ({ userId }) => {
  const Token = jwt.sign({ userId }, process.env.JWTKEY, {
    expiresIn: "7d",
  });

  const updateRefreshTokenUser = await UserModel.updateOne(
    { _id: userId },
    {
      refresh_token: Token,
    }
  );

  return Token;
};

export default genertedRefreshToken;
