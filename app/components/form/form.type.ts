type FormFieldType = {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
};

export type FormType = {
  heading: string;
  fields: FormFieldType[];
};

export type FormProps = {
  form: FormType;
  className?: string;
};
