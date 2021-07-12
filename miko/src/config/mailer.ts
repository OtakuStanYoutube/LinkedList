import mailer from "nodemailer";

export const transporter = mailer.createTransport({
  service: 'SendinBlue',
  secure: false,
  auth: {
    user: process.env.SENDINBLUE_USER,
    pass: process.env.SENDINBLUE_PASSWORD,
  },
});
