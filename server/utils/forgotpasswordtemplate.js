const forgotPasswordTemplate = ({ name, otp }) => {
  return `
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
    <div style="background-color: #007bff; color: #ffffff; text-align: center; padding: 20px;">
      <h1 style="margin: 0; font-size: 24px;">Password Reset Request</h1>
    </div>
    <div style="padding: 20px; line-height: 1.6; color: #333333;">
      <p>Dear ${name},</p>
      <p>We received a request to reset your password. Please use the following OTP code to reset your password:</p>
      <div style="background-color: #ffeb3b; font-size: 24px; font-weight: bold; padding: 15px; text-align: center; margin: 20px 0; border-radius: 5px; letter-spacing: 2px; color: #333;">
        ${otp}
      </div>
      <p>This OTP is valid for 1 hour only. Enter this OTP on the Binkeyit website to proceed with resetting your password.</p>
      <p>If you didn't request this, please ignore this email or contact support for assistance.</p>
      <p>Thank you,<br>The Binkeyit Team</p>
    </div>
    <div style="background: #f4f4f4; text-align: center; padding: 10px; font-size: 12px; color: #777777;">
      <p>© 2024 Binkeyit. All rights reserved.</p>
    </div>
  </div>
</body>
    `;
};

export default forgotPasswordTemplate;
