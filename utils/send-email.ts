import nodemailer from 'nodemailer';
import { env } from 'process';

export const sendEmail = async (data: EmailProps): Promise<boolean> => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.SMTP_AUTH_USER,
        pass: env.SMTP_AUTH_PASS,
      },
    });

    const email = await transporter.sendMail({
      ...data,
      from: {
        name: 'Avid Agency',
        address: env.SMTP_AUTH_USER!,
      },
      bcc: env.SMTP_AUTH_USER!,
    });
    return email.rejected.length === 0;
  } catch (error) {
    console.error('util/sendEmail', error);
    return false;
  }
};
