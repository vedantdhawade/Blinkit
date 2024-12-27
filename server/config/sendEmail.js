import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESENDAPIKEY);

const sendEmail = async ({ sendto, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Blinkit Clone <onboarding@resend.dev>",
      to: sendto,
      subject: subject,
      html: html,
    });

    if (error) {
      return console.error({ error });
    }
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
