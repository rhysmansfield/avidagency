import { CommonLink } from "@/types/common.type";

export type TextBlockProps = {
  title: string;
  text: JSX.Element;
  id?: string;
  cta?: CommonLink;
};
