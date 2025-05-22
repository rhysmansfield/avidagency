export type LandingRequest = {
  name: string;
  email: string;
  phone: string;
  website?: string;
};

export type LandingResponse = {
  message: string;
};
