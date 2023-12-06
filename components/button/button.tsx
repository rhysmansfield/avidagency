import Link from "next/link";

import styles from "./button.module.scss";
import { ButtonProps } from "./button.type";
import { classList } from "@/utils/class-list";

export const Button = ({ url, label, additionalClassName }: ButtonProps) => (
  <Link href={url} className={classList(styles.root, additionalClassName)}>
    {label}
  </Link>
);
