export type ContactRequest = {
  name: string;
  email: string;
  services: string[];
  message: string;
};

export type ContactResponse = {
  message: string;
};
