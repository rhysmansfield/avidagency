export const REGEX_NAME_VALIDATION = /^(?:\p{L}|[ ,\u2019'-])+$/iu;

export const REGEX_EMAIL_VALIDATION =
  /^[\w+-.]{1,64}@([\w-]{1,45}\.)+[\w-]{2,4}$/;

export const REGEX_MOBILE_VALIDATION = /^\+[1-9]\d{10,14}$/;
