import mailer from "nodemailer";

export const transporter = mailer.createTransport({
  host: "127.0.0.1",
  port: 1025,
  secure: false,
  auth: {
    user: "user",
    pass: "password",
  },
});
