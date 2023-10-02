import { FormType } from "@app/components/form/form.type";

export type HeroProps = {
  title: JSX.Element;
  subtitle: string;
  form: FormType;
};

export type HeroFormProps = {
  form: FormType;
};
