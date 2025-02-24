import nodemailer from 'nodemailer';

export const sendEmail = async (data: EmailProps): Promise<boolean> => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
    });

    const email = await transporter.sendMail({
      ...data,
      from: {
        name: 'Avid Agency',
        address: process.env.SMTP_AUTH_USER!,
      },
      bcc: process.env.SMTP_AUTH_USER!,
    });
    return email.rejected.length === 0;
  } catch (error) {
    console.error('util/sendEmail', error);
    return false;
  }
};
