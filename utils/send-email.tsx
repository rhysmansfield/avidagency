import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    },
  });

  return await transporter.sendMail({
    ...data,
  });
};
