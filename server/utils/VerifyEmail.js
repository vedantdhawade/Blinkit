const verifyEmailTemplate = ({ name, url }) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="background-color: #002D62; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Welcome to Binkeyit</h1>
        </div>
        <div style="padding: 20px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333;">Dear <strong>${name}</strong>,</p>
            <p style="font-size: 16px; color: #555;">Thank you for registering with <strong>Binkeyit</strong>. We are excited to have you on board!</p>
            <p style="font-size: 16px; color: #555;">Please click the button below to verify your email address:</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="${url}" style="
                    background-color: #FFB300; 
                    color: #ffffff; 
                    text-decoration: none; 
                    padding: 15px 30px; 
                    border-radius: 5px; 
                    font-size: 16px; 
                    font-weight: bold; 
                    display: inline-block;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: background-color 0.3s ease;">
                    Verify Email
                </a>
            </div>
            <p style="font-size: 14px; color: #999; text-align: center;">If you didn’t sign up for Binkeyit, please ignore this email.</p>
        </div>
        <div style="background-color: #f9f9f9; color: #666; padding: 15px; text-align: center; font-size: 12px;">
            © 2024 Binkeyit. All rights reserved.
        </div>
    </div>
    `;
};

export default verifyEmailTemplate;
