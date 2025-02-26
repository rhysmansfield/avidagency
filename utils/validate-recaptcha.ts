import axios from 'axios';

export const validateRecaptcha = async (token: string): Promise<boolean> => {
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE_KEY}&response=${token}`,
  );

  const {
    data: { success: isValid },
  } = response;

  if (!isValid)
    console.error({
      source: 'utils/validate-recaptcha',
      error: 'Recaptcha is invalid',
      data: response.data,
    });
  return response.data.success;
};
