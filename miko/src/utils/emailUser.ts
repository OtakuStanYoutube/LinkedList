import { transporter } from "../config/mailer";
import { baseURL } from "../constants";

export const mailUser = async (
  username: string,
  email: string,
  token: string,
) => {
  const verifyUrl = `${baseURL}/api/v1/user/verifyEmail/${token}`;
  const mailOptions = {
    from: "lolicon@hentaihaven.com",
    to: email,
    subject: "Account Verification",
    text: `Hello ${username}, Welcome to LinkedList. Click on the link below to verify your account \n\n ${verifyUrl}`,
  };

  const info = await transporter.sendMail(mailOptions, (error, message) => {
    if (error) {
      console.log(error);

      return "Technical Issue!, There was some error in sending the email. Please click on resend for verify your Email.";
    } else {
      console.log(message);

      return "Mail Sent Successfully";
    }
  });

  return info;
};
